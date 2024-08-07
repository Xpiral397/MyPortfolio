import React from "react";

import { workExperience } from "./data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="grid w-full grid-cols-1 gap-10 mt-12 lg:grid-cols-4">
        {workExperience.map((card) => (
          <>
            <div className="dark:hidden block ">
              <Button
                key={card.id}
                //   random duration will be fun , I think , may be not
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  //   add these two
                  //   you can generate the color from here https://cssgradient.io/
                  background: "rgb(418,227,229)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  // add this border radius to make it more rounded so that the moving border is more realistic
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                // remove bg-white dark:bg-slate-900
                className="dark:hidden blocl flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex flex-col gap-2 p-3 py-6 lg:flex-row lg:items-center md:p-5 lg:p-10">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="w-16 lg:w-32 md:w-20"
                  />
                  <div className="lg:ms-5">
                    <h1 className="text-xl font-bold text-start md:text-2xl">
                      {card.title}
                    </h1>
                    <p className="mt-3 font-semibold text-start text-white-100">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            </div>
            <div className="dark:block hidden">
              <Button
                key={card.id}
                //   random duration will be fun , I think , may be not
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  //   add these two
                  //   you can generate the color from here https://cssgradient.io/
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  // add this border radius to make it more rounded so that the moving border is more realistic
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                // remove bg-white dark:bg-slate-900
                className="dark:block hidden flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex flex-col gap-2 p-3 py-6 lg:flex-row lg:items-center md:p-5 lg:p-10">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="w-16 lg:w-32 md:w-20"
                  />
                  <div className="lg:ms-5">
                    <h1 className="text-xl font-bold text-start md:text-2xl">
                      {card.title}
                    </h1>
                    <p className="mt-3 font-semibold text-start text-white-100">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Experience;
