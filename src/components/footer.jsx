import React from "react";
import linkedin from "./icons/linkedin.svg";
import insta from "./icons/instagram.svg";
import fb from "./icons/facebook.svg";

function Footer() {
  return (
    <div className="mt-[300px] w-400px h-[484px] bg-black">
      <div>
        <div className="pb-[100px] grid grid-cols-2 container  flex-wrap justify-between items-center mx-auto">
          <div className="-ml-[90px] w-[341px] mt-[130px]">
            <h1 className=" text-left  font-jost text-xm text-primary">
              Together through all.
            </h1>
          </div>
          <div className="ml-[110px]">
            <img className="mt-[50px] ml-[335px] absolute" src={fb} alt="" />
            <img
              className="mt-[50px] ml-[400px] absolute"
              src={linkedin}
              alt=""
            />
            <img className="mt-[50px] ml-[465px] absolute" src={insta} alt="" />

            <button className="mt-[48px] ml-[550px] w-[200px] flex fd-row justify-center  bg-blue text-primary hover:bg-blue-700 text-white font-bold py-4 absolute  rounded-full">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <hr className="mx-auto w-[90%]  border-1 bg-primary"></hr>
      <div className="absolute left-0">
        <h1 className="text-primary ml-[86px] p-[10px] text-ms font-jost">
          Smarty
        </h1>
      </div>
      <div className="absolute right-0">
        <h1 className="text-[#AFAFAF]  p-[10px] mr-[83px] text-[20px] font-jost">
          *Copyright 2022. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
