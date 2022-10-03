import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="container flex flex-wrap justify-between items-center mx-auto">
      <div className="bg-blue shadow-sm w-[360px] h-[360px] -mt-[147px] -ml-[15px] rounded-[50%]">
        <h1 className=" text-center font-jost  text-lg mt-[153px] mr-[63px] ml-[62px] mb-[99] text-primary">
          Smarty
        </h1>
      </div>
      <div className=" -mt-[145px] -mr-[22px] " id="navbar-default">
        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="1"
              className="text-xs font-normal font-jost block  py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="1"
              className="text-xs font-normal font-jost block  py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="1"
              className="text-xs  font-normal font-jost block  py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="1"
              className="text-xs font-normal font-jost text-blue pr-[36px] pl-[37px] pt-[9px] pb-[10px] block border-[2px] rounded-[36px] -mt-[4.4px]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
