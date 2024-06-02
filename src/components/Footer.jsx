import React from "react";

function Footer() {
  return (
    <section className="w-full p-4 pt-10 max-md:pt-2">
      <div className="flex max-md:grid grid-cols-2 max-md:place-items-center justify-around ">
        <div className="flex flex-col gap-4 text-sm">
          <div className="font-bold text-2xl">
            <img src="" alt="" />
            uifry
          </div>
          <div className="">
            <img src="" alt="" />
            uifry.com
          </div>
          <div className="">
            <img src="" alt="" />
            +1234567890
          </div>
        </div>
        <div className="grid max-md:p-4  gap-[8px] text-sm">
            <div className="text-2xl font-semibold">Links</div>
            <div>Home</div>
            <div>About Us</div>
            <div>Bookings</div>
            <div>Blog</div>
        </div>
        <div className="grid max-md:p-4  gap-[8px] text-sm">
            <div className="text-2xl font-semibold">Legal</div>
            <div>Terms Of Use</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
        </div>
        <div className="grid max-md:p-4  gap-[8px] text-sm">
            <div className="text-2xl font-semibold ">Product</div>
            <div>Take Tour</div>
            <div>Live Chat</div>
            <div>Reviews</div>
        </div>
        <div className="grid max-md:p-4 max-md:place-items-center max-md:col-span-2  gap-[8px] text-sm">
            <div className="text-2xl font-semibold text-center">Newsletter</div>
            <div>Stay Up To Date</div>
            <div className="flex"><input type="text" placeholder="Your email" /><button className="p-4 bg-black text-white rounded-md">Subscribe</button></div>
        </div>
      </div>
      <div className="w-full p-5 pt-10">
      <div className="h-[1px] bg-gray-600"></div>
      </div>
      <div className="p-4 font-mono text-xl text-center">Copyright 2022 Uifry.com All Rights Reserved</div>
    </section>
  );
}

export default Footer;
