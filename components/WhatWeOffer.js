import React from "react";
import Image from "next/image";
import hero from "../img/utilities/buma-hero.avif";

const WhatWeOffer = () => {
  return (
    <section className="w-full h-screen relative clip-path-2">
      <div className="absolute inset-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-shadow before:opacity-90 before:box-shadow">
        <Image
          src={hero}
          alt="img"
          className="w-full h-full object-cover "
        ></Image>
      </div>
      <div>
        <h3>essa</h3>
      </div>
    </section>
  );
};

export default WhatWeOffer;
