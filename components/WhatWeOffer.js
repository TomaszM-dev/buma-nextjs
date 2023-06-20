"use client";
import React from "react";
import Image from "next/image";
import hero from "../img/utilities/buma-hero.avif";
import Title from "./Title";
import Filter from "./Filter";
import TjenesterData from "@/Data/TjenesterData";
import { useState } from "react";
import Link from "next/link";
import { EXPORT_MARKER } from "next/dist/shared/lib/constants";

const WhatWeOffer = () => {
  const workData = TjenesterData();
  const [filtered, setFiltered] = useState(TjenesterData());
  const [activeCategory, setActiveCategory] = useState("outdoor");
  console.log(workData);
  const title = "What we offer";

  return (
    <section className="w-full h-[65rem] relative clip-path-2">
      <div className="absolute inset-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-shadow before:opacity-90 before:box-shadow">
        <Image
          src={hero}
          alt="img"
          className="w-full h-full object-cover"
        ></Image>
      </div>
      <div className="pt-20 pb-10">
        <Title title={title}></Title>
      </div>
      <div className="relative w-[60rem] h-[39rem] bg-white bg-opacity-70 mx-auto rounded-md flex flex-col  ">
        <Filter
          workData={workData}
          setFiltered={setFiltered}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <div className="w-[90%] mx-auto h-full grid-offer grid  z-10 overflow-hidden opacity-100">
          {filtered.map((el) => {
            return (
              <Link href={`/tjenester/${el.url}`} key={el.title}>
                <div className="flex flex-col justify-center items-center pt-[2.5rem] overflow-hidden w-25">
                  <div className="py-7 px-7  important rounded-lg z-10">
                    <Image src={el.img} width="65" height="60"></Image>
                  </div>
                  <h3 className="text-[1.2rem] font-[600] text-blackLight mt-5 text-center w-[90%]">
                    {el.title}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
