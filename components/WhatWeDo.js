"use client";

import TabDetail from "./TabDetail";
import React from "react";
import Title from "./Title";
import TabData from "@/Data/TabData";
import { useState, useRef } from "react";

const WhatWeDo = () => {
  const tabData = TabData();
  const tabTitles = tabData.map((el) => {
    return [el.title];
  });
  const [active, setIsActive] = useState([tabData[0]]);
  const tabRef = useRef(null);

  const activeHandler = (e) => {
    tabData.forEach((el) => {
      if (el.title.toLocaleString() === e.target.textContent) {
        tabRef.current.style.top = el.top;

        setIsActive([el]);
      }
    });
  };

  const title = "What we do";
  return (
    <section className="w-full h-[54rem] flex flex-col items-center mt-[3.5rem] ">
      <Title title={title} />
      <div className="w-[62rem] h-[30rem] bg-white shadow-2xl mt-20 rounded-sm flex items-center  ">
        <ul className="flex-initial w-[18rem]  h-[80%] flex flex-col  justify-center relative pr-10 border-r-[1px] text-blackLight">
          {tabTitles.map((el) => {
            return (
              <li
                key={el.title}
                onClick={activeHandler}
                className={`text-[1.4rem] my-5 text-start ml-10 font-[300] cursor-pointer hover:text-blue ${
                  active[0].title === el.toLocaleString() ? "text-blue" : ""
                }`}
              >
                {el}
              </li>
            );
          })}
          <div
            ref={tabRef}
            className="absolute w-[0.3rem] h-[4.2rem] bg-blue text-white right-0 rounded-md transition-all duration-1000 top-[1.5rem]"
          ></div>
        </ul>
        <div className=" flex-1 p-20">
          {active.map((el) => {
            return (
              <TabDetail
                title={el.title}
                icon={el.icon}
                information={el.information}
                key={el.title}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="box"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
