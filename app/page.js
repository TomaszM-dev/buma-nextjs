import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import hero from "../img/utilities/buma-hero.avif";
import ContactButton from "@/components/ContactButton";

export default function Home() {
  return (
    <>
      <div id="home" className="w-full  relative  clip-path h-[90vh] ">
        <div className="absolute inset-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-shadow before:opacity-90 before:box-shadow">
          <Image src={hero} className="w-full h-full object-cover "></Image>
        </div>
        <div className="leading-[3rem] relative text-white flex flex-col mx-auto justify-end pb-[14rem] w-[50%] h-[82%]">
          <h1 className="text-[2.5rem]  font-[500] mb-10">
            Vi realiserer ditt prosjekt til{" "}
            <span className="text-blue font-[500]"> avtalt pris</span> og tid.
          </h1>
          <h2 className="text-4xl">Velg oss og vi far jobben gjort!</h2>
        </div>
        <div className="flex flex-col items-end justify-center  px-20 text-2xl relative ">
          <div className="text-[1.8rem] text-gold relative flex  items-end  ">
            <FontAwesomeIcon
              className="h-[1.4rem]"
              icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="h-[1.4rem]"
              icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="h-[1.4rem]"
              icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="h-[1.4rem]"
              icon={faStar}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="h-[1.4rem]"
              icon={faStar}
            ></FontAwesomeIcon>
          </div>
          <div className="mt-3 mr-1 font-semibold">
            <p className="text-white text-[1.2rem] ">4.9/5.0 50+</p>
            <p className="text-white text-center text-[1.2rem] ">reviews</p>
          </div>
        </div>
      </div>
      <ContactButton />
    </>
  );
}

// className="w-full flex flex-col relative object-cover h-[90vh] clip-path before:absolute before:top-0 before:left-0 before:w-full before:h-full before:object-cover before:bg-cover before:bg-center before:content-[''] before:opacity-80 before:bg-slate-300"
