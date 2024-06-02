import React from "react";
import heroSlip from "../assests/heroSlip.png";
import heroSec0 from "../assests/heroSec0.png";
import heroSec1 from "../assests/heroSec1.png";
import heroSec2 from "../assests/heroSec2.png";
import heroSec3 from "../assests/heroSec3.png";

function HeroSection() {
  return (
    <section className="w-full flex justify-between items-center ml-4 pl-14 ">
      <section className="w-full grid grid-cols-2 max-md:grid-cols-1">
        <div className="p-4">
          <div className="text-6xl font-bold pb-4">
            Make The Financial Decisions
          </div>
          <div className="text-zinc-500 pb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quia
            sapiente cum iure doloribus eligendi quae unde expedita cupiditate
            totam, rem amet possimus.
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="">
              <button className="bg-black text-white p-8 px-11 text-center rounded-md hover:bg-gray-300"> Get Started →</button>
             
            </div>
            <div className="p-4 text-center rounded-md">
              <button class="bg-white-200 hover:bg-gray-300  text-gray-700 font-bold py-4 px-6 rounded inline-flex items-center">
                Watch Video
              </button>
            </div>
          </div>
          <div>
            <img src={heroSlip} alt="" />
          </div>
        </div>
        <div className="w-full ml-[220px] max-md:hidden">
          <div className=" relative">
            <div className="absolute w-[60%] ">
              <img src={heroSec0} alt="" />
            </div>
            <div className="absolute w-[70%]">
              <img src={heroSec1} alt="" />
            </div>
            <div className="absolute top-10 left-2 w-[70%]">
              <img src={heroSec2} alt="" />
            </div>
            <div className="absolute -top-10 -left-[70px] w-[70%]">
              <img src={heroSec3} alt="" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
