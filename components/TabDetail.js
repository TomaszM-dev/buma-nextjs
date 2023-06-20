import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const TabDetail = ({ title, icon, information }) => {
  return (
    <div className="flex flex-col text-center text-blackLight">
      <FontAwesomeIcon icon={faUsers} className="text-[4rem] " />
      <motion.h3 className="text-[2rem] font-[600] my-8">{title}</motion.h3>
      <motion.p className="text-[1.4rem] text-left font-[300]">
        {information}{" "}
      </motion.p>
    </div>
  );
};

export default TabDetail;
