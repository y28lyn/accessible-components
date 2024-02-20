import { useState, useEffect } from "react";
import "../index.css";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed md:hidden top-0 right-0 p-1 rounded-lg focus:outline-none focus:ring z-50 bg-slate-800 text-white m-3"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
        <span className="sr-only">Toggle Sidebar</span>
      </button>
      <div
        className={`flex flex-col top-0 left-0 w-64 border-0 md:border-r-[2px] text-white transition-transform duration-300 transform sidebar ${isSidebarOpen ? "open md:w-fit w-screen" : "closed"}`}
        style={{
          height: isSidebarOpen && isMobile ? "100vh" : "",
          position: isSidebarOpen && isMobile ? "fixed" : "relative",
          overflow: isSidebarOpen && isMobile ? "hidden" : "",
        }}
      >
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-50">
                  Menu
                </div>
              </div>
            </li>
            <li>
              <a
                href="#switch"
                onClick={isMobile ? closeSidebar : undefined}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 text-gray-200  border-l-4 border-transparent hover:border-emerald-400 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    fill="#ffffff"
                    viewBox="-2 -5 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin"
                    className="w-5 h-5"
                    stroke="#ffffff"
                    strokeWidth="0.00024000000000000003"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M7 2a5 5 0 1 0 0 10h6a5 5 0 0 0 0-10H7zm0-2h6a7 7 0 0 1 0 14H7A7 7 0 0 1 7 0zm6 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                    </g>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Switch
                </span>
              </a>
            </li>
            <li>
              <a
                href="#menubutton"
                onClick={isMobile ? closeSidebar : undefined}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 text-gray-200  border-l-4 border-transparent hover:border-emerald-400 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4 6H20M4 12H14M4 18H9"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Menu Button
                </span>
              </a>
            </li>
            <li>
              <a
                href="#tooltip"
                onClick={isMobile ? closeSidebar : undefined}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 text-gray-200  border-l-4 border-transparent hover:border-emerald-400 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Tooltip
                </span>
              </a>
            </li>
            <li>
              <a
                href="#accordion"
                onClick={isMobile ? closeSidebar : undefined}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 text-gray-200  border-l-4 border-transparent hover:border-emerald-400 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="#ffffff"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <path d="M381.879,87.919l-5.905,22.04l-23.473-31.298l-47.949,11.987l-48.57-36.428l-48.57,36.427l-47.949-11.987l-23.309,31.081 l-6.102-22.775L0,121.814l90.022,335.964l130.051-34.847l-5.186-19.354l41.096-8.22l41.305,8.261l-5.43,20.265l130.121,33.766 L512,121.684L381.879,87.919z M113.823,416.555L41.224,145.615l65.026-17.423l5.807,21.676l-37.932,10.164l8.712,32.512 l37.932-10.164l8.712,32.513L91.55,225.057l8.712,32.513l37.931-10.164l8.712,32.513l-37.931,10.164l8.712,32.513l37.931-10.164 l8.712,32.513l-37.931,10.164l8.712,32.512l37.931-10.164l5.809,21.676L113.823,416.555z M206.156,370.998l-58.927-219.924 l25.754-34.338l23.333,5.833l40.386,242.32L206.156,370.998z M255.982,275.823l-26.597-159.581l26.597-19.948l26.597,19.948 L255.982,275.823z M275.262,364.889l40.386-242.32l23.334-5.833l25.917,34.555L306.017,371.04L275.262,364.889z M398.109,416.682 l-64.958-16.856l72.596-270.938l64.958,16.856L398.109,416.682z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            x="411.226"
                            y="158.017"
                            transform="matrix(0.2588 -0.9659 0.9659 0.2588 148.3818 543.0655)"
                            width="33.659"
                            height="33.659"
                          ></rect>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            x="393.826"
                            y="223.043"
                            transform="matrix(0.2588 -0.9659 0.9659 0.2588 72.6754 574.4557)"
                            width="33.659"
                            height="33.659"
                          ></rect>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            x="376.402"
                            y="288.068"
                            transform="matrix(0.2588 -0.9659 0.9659 0.2588 -3.0492 605.8218)"
                            width="33.659"
                            height="33.659"
                          ></rect>
                        </g>
                      </g>
                      <g>
                        <g>
                          <rect
                            x="358.965"
                            y="353.091"
                            transform="matrix(0.2588 -0.9659 0.9659 0.2588 -78.7808 637.1723)"
                            width="33.659"
                            height="33.659"
                          ></rect>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Accordion
                </span>
              </a>
            </li>
            <li>
              <a
                href="#tabs"
                onClick={isMobile ? closeSidebar : undefined}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 text-gray-200  border-l-4 border-transparent hover:border-emerald-400 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 16 16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill="#ffffff"
                        d="M14 4v-2h-14v12h16v-10h-2zM10 3h3v1h-3v-1zM6 3h3v1h-3v-1zM15 13h-14v-10h4v2h10v8z"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Tabs
                </span>
              </a>
            </li>
            <li>
              <a
                href="#form"
                onClick={isMobile ? closeSidebar : undefined}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 text-gray-200  border-l-4 border-transparent hover:border-emerald-400 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="0.00024000000000000003"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M10 15h12v1H10zm-4-3h2v-2H6zm4-1h12v-1H10zm-4 6h2v-2H6zm4 4h12v-1H10zm-4 1h2v-2H6zM23 3v3a1.001 1.001 0 0 1-1 1H2a1.001 1.001 0 0 1-1-1V3a1.001 1.001 0 0 1 1-1h20a1.001 1.001 0 0 1 1 1zm-.999 3H22V3H2v3h20.001z"></path>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                    </g>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Form
                </span>
              </a>
            </li>
            <li className="px-5">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-50">
                  Settings
                </div>
              </div>
            </li>
            <li>
              <a
                href="#main"
                onClick={isMobile ? closeSidebar : undefined}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800 text-gray-200  border-l-4 border-transparent hover:border-emerald-400 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Settings
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
