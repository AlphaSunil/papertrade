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
  const { currency, numberWithCommas } = CryptoState();
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

  const max = numberWithCommas(
    Math.max(...chartData.map((price) => price[1])).toFixed(2)
  );

  const min = numberWithCommas(
    Math.min(...chartData.map((price) => price[1])).toFixed(2)
  );

  const initialValue = { ...chartData.map((price) => price[1]) }[0];

  const finalValue = { ...chartData.map((price) => price[1]).slice(-1) }[0];

  const returns = (((finalValue - initialValue) / initialValue) * 100).toFixed(
    2
  );

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

  return (
    <div className="md:w-2/3 lg:w-2/3 md:mt-5 relative mx-2">
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0"
                stopColor={returns < 0 ? "#AA0000" : "#006A4E"}
                stopOpacity={0.4}
              />
              <stop
                offset="75%"
                stopColor={returns < 0 ? "#fd5c63" : "#17B169"}
                stopOpacity={0.05}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="1"
            stroke={returns < 0 ? "#AA0000" : "#006A4E"}
            fill="url(#color"
          />
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
          High:&nbsp;
          <span className="font-normal text-green-700">
            {symbol}
            {max}
          </span>
        </h4>
        <h4>
          Low:&nbsp;
          <span className="font-normal text-red-700">
            {symbol}
            {min}
          </span>
        </h4>
        <h4>
          Returns:&nbsp;
          <span
            className={
              returns < 0
                ? "text-red-700 font-normal"
                : "text-green-700 font-normal"
            }
          >
            {returns}%
          </span>
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
