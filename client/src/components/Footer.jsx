import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-[1438px] h-[463px] px-[60px] py-[54px] flex-col justify-start items-start gap-[33px] inline-flex">
        <div className="w-[119px] h-[89px] text-black text-4xl font-extrabold font-['Inter']">
          Logo
        </div>
        <div className="flex-col justify-start items-start gap-[7px] flex">
          <div className="text-black text-xl font-semibold font-['Inter']">
            Address:
          </div>
          <div className="w-[407px] h-6 text-black text-base font-normal font-['Inter']">
            Level 1, 12 Sample St, Sydney NSW 2000
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[7px] flex">
          <div className="text-black text-xl font-semibold font-['Inter']">
            Contact:
          </div>
          <div className="w-[304px] h-6 text-black text-base font-normal font-['Inter']">
            1800 123 4567 doe@gmail.com
          </div>
        </div>
        <div className="w-[1175px] h-[0px] border border-black"></div>
        <div className="justify-start items-start gap-[470px] inline-flex">
          <div className="w-[304px] h-6 text-black text-base font-normal font-['Inter']">
            © 2024. All rights reserved.
          </div>
          <div className="justify-start items-start gap-4 flex">
            <div className="w-[121px] h-6 text-black text-base font-normal font-['Inter']">
              Privacy Policy
            </div>
            <div className="w-[161px] h-6 text-black text-base font-normal font-['Inter']">
              Terms of Services
            </div>
            <div className="w-[121px] h-6 text-black text-base font-normal font-['Inter']">
              Cookie Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
