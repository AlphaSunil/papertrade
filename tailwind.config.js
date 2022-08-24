/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(100%)" },
          "100%": {
            transform: "translateX(-110rem)   ",
          },
        },
      },
      animation: {
        ticker: "ticker linear 25s infinite",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};

// <div className="flex justify-center">
// <div className="flex flex-col md:flex-row md:max-w-[70rem] rounded-lg bg-white shadow-lg">
//   <img
//     className=" w-full h-96  object-cover md:w-[450px] md:h-[450px] rounded-t-lg md:rounded-none md:rounded-l-lg"
//     src={article.urlToImage}
//     alt=""
//   />
//   <div className="p-6 flex flex-col justify-start">
//     <h5 className="text-gray-900 text-xl font-medium mb-2">
//       {article.title}
//     </h5>
//     <p className="text-gray-700 text-base mb-4">
//       <article className="description">
//         {article.description}
//       </article>
//     </p>
//     <p className="text-gray-600 text-xs">
//       Published at: {article.publishedAt}
//     </p>
//     <p className="text-gray-600 text-xs">
//       Author: {article.author}
//     </p>
//   </div>
// </div>
// </div>
