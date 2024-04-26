import React, { useEffect, useState } from "react";

const LIGHTS = {
  red: "red",
  green: "green",
  yellow: "yellow",
};

const TrafficLights = () => {
  const [active, setActive] = useState(LIGHTS.red);

  useEffect(() => {
    let timer;
    if (active === LIGHTS.red) {
      timer = setTimeout(() => setActive(LIGHTS.green), 4000);
    } else if (active === LIGHTS.green) {
      timer = setTimeout(() => setActive(LIGHTS.yellow), 3000);
    } else if (active === LIGHTS.yellow) {
      timer = setTimeout(() => setActive(LIGHTS.red), 500);
    }
    return () => clearTimeout(timer);
  }, [active]); 

  return (
    <div className=" border-4 border-black w-12">
      <div
        className={`text-center rounded-full m-2 ${
          active !== LIGHTS.green ? "bg-gray-600" : "bg-green-600"
        }`}
      >
        A
      </div>

      <div
        className={`text-center rounded-full m-2 ${
          active !== LIGHTS.yellow ? "bg-gray-600" : "bg-yellow-300"
        }`}
      >
        B
      </div>
      <div
        className={`text-center rounded-full m-2 ${
          active !== LIGHTS.red ? "bg-gray-600" : "bg-red-600"
        }`}
      >
        C
      </div>
    </div>
  );
};

export default TrafficLights;
