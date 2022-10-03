import "./hero.css";
import React from "react";

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
            src="https://s3-alpha-sig.figma.com/img/843e/9498/7bc0870eebb6f22f4743147f3d3e8339?Expires=1665360000&Signature=LAcAe3sVo~8D3hifewGh5vSzczwr5jU6krfy~0TK58ngzsITI04D0vtji~n8V3YhdbXMYctk~T6BeD1hxCOtjk9~Q8Sd3ccZ8PJvvrDDzG5PjRwXlM-JCKRMJaEnnawTekdXDiEBcXdux-8aQ6AQyUPzH5qgiTAyMahFcg-DAc1sobqTtjw6V7kt3QuWcPou~jhWZgx4IKa2y67CW9Vf9r9TcF8mCEH0cNs0ihSj5JjAQAZJotSnCTQ3AnH-aP2kAt1kwsxL5GTagCv9PznsIbGkUNywIrD83BTwDu9rHl6hlSqsy5aPZM9sCCjpMBUFu0R1JrMeN11A2FsZnyxByg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          ></img>
        </div>
        <div className="bg-blue w-[614px] h-[128px] -mt-[400px]  ml-[1600px] "></div>
      </div>
    </div>
  );
}
