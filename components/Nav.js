import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../img/utilities/buma-logo-white.png";

const Nav = () => {
  return (
    <div className="w-full  bg-blue2 fixed  z-20 opacity-90">
      <div className=" flex  text-white max-w-[110rem]  h-[6.7rem] items-center px-20 mx-auto justify-center">
        <ul className="flex text-[1.1rem] mr-14">
          <li className="mx-5">
            <Link href="/omuss">Om Uss</Link>
          </li>
          <li className="mx-5">
            <Link href="/contactus">Contact Us</Link>
          </li>
          <li className="mx-5">
            <Link href="/referenser">Referenser</Link>
          </li>
        </ul>
        <Link href="/">
          <Image alt="img" src={logo} width="210" />
        </Link>
        <ul className="flex text-[1.1rem] ml-14">
          <li className="mx-5">
            <Link href="/tjenester">Tjenester</Link>
          </li>
          <li className="mx-5">
            <Link href="/prosjekter">Prosjekter</Link>
          </li>
          <li className="mx-5">
            <Link href="/blogg">Blogg</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
