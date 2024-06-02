import React from "react";
import bg from "../assests/2.png";
function Banner3two() {
  return (
    <section
      className="p-4 grid grid-cols-2 max-md:grid-cols-1 w-full h-[700px] lg:h-[900px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="z-30 w-full text-5xl text-left font-bold pb-10 pl-40">
        <span className="text-sm ">Testimonials</span> <br />
        What Our Users Say About Us?
      </div>

      <div className="p-8 pt-20 lg:pt-36 lg:mt-14">
        <div></div>
        <div className="text-black w-[60%] pt-28 text-3xl font-bold">
          Best Financial Accounting App Ever!!
        </div>
        <div className="text-[#808080] text-lg w-[70%] pt-3 max-md:w-full ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero a
          nobis cumque quas suscipit, itaque earum odio asperiores repellendus
          dolore ullam id ad! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perferendis voluptate nobis nulla culpa doloribus fugit vel.
        </div>
        <div className="text-black w-[60%] pt-2 text-lg font-bold">
          Nick Jonas
        </div>
      </div>
    </section>
  );
}

export default Banner3two;
