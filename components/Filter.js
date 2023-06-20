import React from "react";
import { useEffect } from "react";
import Link from "next/link";

const Filter = ({
  setActiveCategory,
  activeCategory,
  setFiltered,
  workData,
}) => {
  useEffect(() => {
    const filtered = workData.filter((el) =>
      el.category.includes(activeCategory)
    );

    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <div className="flex w-[60%] justify-center mx-auto text-black text-[1.4rem] pt-[3rem]">
      <button
        onClick={() => setActiveCategory("outdoor")}
        className={`uppercase mr-20 font-[600]  pb-2 ${
          activeCategory === "outdoor"
            ? "text-blue border-b-2  border-blue"
            : ""
        } `}
      >
        Outdoor Work
      </button>

      <button
        onClick={() => setActiveCategory("indoor")}
        className={`uppercase mr-20 font-[600]  pb-2 ${
          activeCategory === "indoor" ? "text-blue border-b-2  border-blue" : ""
        } `}
      >
        Indoor Work
      </button>
    </div>
  );
};

export default Filter;
