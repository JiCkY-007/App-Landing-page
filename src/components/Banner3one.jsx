import React from "react";
import bg from "../assests/1.png";

function Banner3one() {
  return (
    <section
      className="p-4 grid grid-cols-2 max-md:grid-cols-1 w-full h-[700px] lg:h-[900px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div></div>
      <div className="p-8 pt-20 lg:pt-36 lg:mt-14">
        <div></div>
        <div className="text-black pt-28 text-4xl font-bold">
          Fully Customizable
        </div>
        <div className="text-[#808080] text-lg w-[70%] pt-3 max-md:w-full ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero a
          nobis cumque quas suscipit, itaque earum odio asperiores repellendus
          dolore ullam id ad! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perferendis voluptate nobis nulla culpa doloribus fugit vel.
        </div>
      </div>
    </section>
  );
}

export default Banner3one;
