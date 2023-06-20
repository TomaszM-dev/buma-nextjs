import React from "react";
import Image from "next/image";
import bluePaint from "../img/utilities/blue-paint.png";

const Title = ({ title }) => {
  return (
    <div className="relative max-h-fit w-fit flex justify-center">
      <Image alt="img" src={bluePaint} width="350" height="100"></Image>
      <h3 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[1.2rem] uppercase font-semibold">
        {title}
      </h3>
    </div>
  );
};

export default Title;
