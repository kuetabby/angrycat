import React from "react";
import { lava } from "@/utils/font";

import "./style.css";

interface Props {}

// const YinLoader: React.FC<Props> = () => {
//   return (
//     <div className="w-full h-screen flex flex-col justify-center items-center mx-auto overflow-hidden">
//       <div className="yin-loaders" />
//     </div>
//   );
// };

const YinLoader: React.FC<Props> = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center mx-auto overflow-hidden ${lava.className}`}
    >
      <div className="w-full h-28 flex items-center justify-center">
        <div className="dot-loader" />
      </div>
      <h1 className="flex text-angry-cat-secondary text-xl lg:text-2xl 2xl:text-3xl font-semibold mt-4">
        dont get angry
        <div className="loading-pulse">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </h1>
    </div>
  );
};

export default YinLoader;
