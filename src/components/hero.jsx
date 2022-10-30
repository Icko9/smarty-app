import "./hero.css";
import React from "react";
import SmartyUp from "../images/smarty-up.png"

export default function Hero(props) {
  return (
    <div>
      <div className="pb-[100px] grid grid-cols-2">
        <div className="bg-cover bg-center ml-[74px] -mt-[200px] bg-smartyRight w-[1079px] h-[896px]">
          <div className=" ml-[50px] -mt-[68px] w-[1012px] h-[1012px]  rounded-[50%] bg-smartyImg "></div>
        </div>
        <div className="ml-[220px] w-[441px] mt-[130px]">
          <h1 className=" text-left  font-jost text-xl text-black">
            {props.title}
          </h1>
          <div className="text-left font-jost text-black text-xs mt-[20px]">
            {props.description}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className=" ml-[220px] mt-[130px]">
          <h1 className="text-sm font-jost text-xl text-black">
            Your health & fitness partner
          </h1>
          <p className=" pb-[50px] text-left font-jost text-black text-xs mt-[20px]">
            Vestibulum nec semper ipsum, quis ornare turpis. Morbi in risus
            velit. Integer consectetur lacinia nibh non rhoncus. Quisque varius
            sapien a rutrum congue. Sed eget convallis eros. Nulla facilisis
            nibh tincidunt, iaculis lorem sed, ornare elit.
          </p>
          <a
            href="#"
            className="text-xs font-normal font-jost text-[#0086CB] -ml-[2px] pr-[40px] pl-[40px] pt-[7px] pb-[7px]  border-[2px] rounded-[36px] "
          >
            See more
          </a>
        </div>

        <div className="bg-gradient-to-l z-0 -mt-[40px] w-[721px] h-[721px] bg-lightblue rounded-[50%]">
          <img
            className="absolute -mt-[115px] object-cover -ml-[110px] w-[979px] h-[996px] "
            src={SmartyUp}
          ></img>
        </div>
        <div className="bg-blue w-[614px] h-[128px] -mt-[400px]  ml-[1600px] "></div>
      </div>
    </div>
  );
}
