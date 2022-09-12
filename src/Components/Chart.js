import React from "react";
import axios from "axios";
import { HistoricalChart } from "../Config/Api";
import { CryptoState } from "../Config/CryptoContext";
import { useEffect } from "react";
import { useState } from "react";
import { ResponsiveContainer, AreaChart, XAxis, Area, Tooltip } from "recharts";
import moment from "moment/moment";
import { selectData } from "./Buttons/SelectData";
import SelectButton from "./Buttons/SelectButton";
const Chart = ({ id }) => {
  const { currency } = CryptoState();
  const [chartData, setChartData] = useState([]);
  const [days, setDays] = useState(365);
  const fetchChartData = async () => {
    const { data } = await axios.get(HistoricalChart(id, days, currency));
    setChartData(data.prices);
  };
  const { symbol } = CryptoState();
  useEffect(() => {
    fetchChartData();
  }, [id, currency, days]);
  console.log(chartData);

  function CustomTooltip({ payload, label, active }) {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-black text-white rounded shadow-xl">
          <h4>
            {moment(label).format(
              `${days <= 7 ? "ddd DD MMM h:mm a" : "DD MMM YYYY"}`
            )}
          </h4>
          <p>
            {symbol}
            {payload[0].value.toFixed(2)}
          </p>
        </div>
      );
    }

    return null;
  }
  console.log(days);
  return (
    <div className="md:w-2/3 lg:w-2/3 md:mt-5 relative mx-2">
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#000000" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#7D7D7D" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area dataKey="1" stroke="#000000" fill="url(#color" />
          <XAxis
            dataKey="0"
            tickFormatter={(unixTime) => moment(unixTime).format("DD MMM YYYY")}
            tick={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-around font-bold  h-8  bottom-10 left-0 right-0 ">
        <h4>
          High: <span className="font-normal">{symbol}417</span>
        </h4>
        <h4>
          Low: <span className="font-normal">{symbol}411</span>
        </h4>
        <h4>
          Returns: <span className="text-green-700 font-normal">1.05%</span>
        </h4>
      </div>
      <div className="flex justify-around  font-bold border-2 py-1 ">
        {selectData.map((day) => (
          <SelectButton
            key={day.value}
            onClick={() => setDays(day.value)}
            selected={day.value === days}
          >
            {day.label}
          </SelectButton>
        ))}
      </div>
    </div>
  );
};

export default Chart;
