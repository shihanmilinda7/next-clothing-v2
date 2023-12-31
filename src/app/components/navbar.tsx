// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { ThemeSwitcher } from "./theme-switcher";

// const TopNavbar = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const button = document.querySelector(
//       "#menu-button"
//     ) as HTMLButtonElement | null;
//     const menu = document.querySelector("#menu") as HTMLElement | null;

//     if (button && menu) {
//       const clickHandler = () => {
//         menu.classList.toggle("hidden");
//       };

//       button.addEventListener("click", clickHandler);

//       // Clean up the event listener when the component unmounts
//       return () => {
//         button.removeEventListener("click", clickHandler);
//       };
//     }
//   }, []);

//   const navButtonHandler = async (btn: string) => {
//     switch (btn) {
//       // case "dashboard":
//       //   router.push("/dashboard");
//       //   break;
//       // case "staff":
//       //   router.push("/staff");
//       //   break;
//       // case "new-project":
//       //   router.push("/project/new-project");
//       //   break;
//       // case "project":
//       //   router.push("/project");
//       //   break;
//       // case "project-assign":
//       //   router.push("/project-assign");
//       //   break;
//       // case "time-allocation":
//       //   router.push("/time-allocation");
//       //   break;
//       // case "work-done-report":
//       //   router.push("/work-done-report");
//       //   break;
//       // case "sign-out":
//       //   await signOut();
//       //   window.location.href = "/";
//       //   break;
//       default:
//         window.location.href = "/";
//     }
//   };

//   // styles for all links
//   const commonStyles = "md:p-4 py-2 block hover:font-bold text-indigo-800";
//   const activeStyle =
//     // commonStyles + " rounded-t-lg bg-purple-500 text-purple-900";
//     commonStyles + " overline";
//   const nonActiveStyle = commonStyles;

//   //style for dropdown
//   const dropCommonStyle = "hover:font-bold py-2 px-4 block whitespace-no-wrap ";
//   const dropActiveStyle =
//     dropCommonStyle +
//     "bg-white text-xs p-4 border border-gray-100 shadow-md font-bold text-xs";
//   const dropNonActiveStyle =
//     dropCommonStyle + "bg-white text-xs p-4 border border-gray-100 shadow-md";
//   return (
//     <header>
//       <nav
//         className="
//           flex flex-wrap
//           items-center
//           justify-between
//           w-full
//           py-4
//           md:py-0
//           px-4
//           text-lg text-gray-700
//           light:bg-white p-4 border border-gray-200 shadow-md
//           dark:bg-slate-800 p-4 border border-gray-200 shadow-md
//           z-50
//         "
//       >
//         <div className="flex">
//           <svg
//             width="35px"
//             height="35px"
//             viewBox="0 0 1024 1024"
//             className="icon"
//             version="1.1"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M511.64164 924.327835c-228.816869 0-414.989937-186.16283-414.989937-414.989937S282.825796 94.347961 511.64164 94.347961c102.396724 0 200.763434 37.621642 276.975315 105.931176 9.47913 8.499272 10.266498 23.077351 1.755963 32.556481-8.488009 9.501656-23.054826 10.266498-32.556481 1.778489-67.723871-60.721519-155.148319-94.156494-246.174797-94.156494-203.396868 0-368.880285 165.482394-368.880285 368.880285S308.243749 878.218184 511.64164 878.218184c199.164126 0 361.089542-155.779033 368.60998-354.639065 0.49556-12.720751 11.032364-22.863359 23.910794-22.177356 12.720751 0.484298 22.649367 11.190043 22.15483 23.910794-8.465484 223.74966-190.609564 399.015278-414.675604 399.015278z"
//               fill="#22C67F"
//             />
//             <path
//               d="M960.926616 327.538868l-65.210232-65.209209-350.956149 350.956149-244.56832-244.566273-65.210233 65.209209 309.745789 309.743741 0.032764-0.031741 0.03174 0.031741z"
//               fill="#74E8AE"
//             />
//           </svg>
//           <h1 className="text-xl text-indigo-700 italic flex items-center justify-center">
//             CeyInfo - POS
//           </h1>
//         </div>

//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           id="menu-button"
//           className="h-6 w-6 cursor-pointer md:hidden block"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>

//         <div
//           className="hidden w-full md:flex md:items-center md:w-auto"
//           id="menu"
//         >
//           <ul
//             className="
//               pt-4
//               text-base text-gray-700
//               md:flex
//               md:justify-between 
//               md:pt-0"
//           >
//             <li>
//               {/* <button
//                 onClick={() => navButtonHandler("dashboard")}
//                 className={
//                   currentRoute === "/dashboard" ? activeStyle : nonActiveStyle
//                 }
//               >
//                 Dashboard
//               </button> */}
//             </li>

//             <div className="flex items-center justify-center">
//               <svg
//                 version="1.1"
//                 id="Layer_1"
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 viewBox="0 0 512 512"
//                 xmlSpace="preserve"
//                 width="30px"
//                 height="30px"
//                 fill="#000000"
//               >
//                 <g id="SVGRepo_bgCarrier" strokeWidth="0" />

//                 <g
//                   id="SVGRepo_tracerCarrier"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />

//                 <g id="SVGRepo_iconCarrier">
//                   {" "}
//                   <circle
//                     style={{ fill: "#90DFAA" }}
//                     cx="256"
//                     cy="256"
//                     r="256"
//                   />{" "}
//                   <path
//                     style={{ fill: "#2C9984" }}
//                     d="M508.114,300.639L369.778,162.302L205.145,325.818l-61.487,72.404l113.761,113.761 C382.942,511.3,487.072,420.29,508.114,300.639z"
//                   />{" "}
//                   <polygon
//                     style={{ fill: "#FFFFFF" }}
//                     points="321.253,113.778 143.658,113.778 143.658,398.222 369.778,398.222 369.778,162.302 "
//                   />{" "}
//                   <polygon
//                     style={{ fill: "#E6F3FF" }}
//                     points="369.778,162.302 321.253,113.778 237.037,113.778 237.037,398.222 369.778,398.222 "
//                   />{" "}
//                   <polygon
//                     style={{ fill: "#CFDBE6" }}
//                     points="321.253,162.304 369.778,162.302 321.253,113.778 "
//                   />{" "}
//                   <circle
//                     style={{ fill: "#26BEBE" }}
//                     cx="237.037"
//                     cy="215.143"
//                     r="37.9"
//                   />{" "}
//                   <path
//                     style={{ fill: "#1DA09C" }}
//                     d="M274.937,215.14c0-20.932-16.968-37.9-37.898-37.9v75.798 C257.969,253.038,274.937,236.07,274.937,215.14z"
//                   />{" "}
//                   <path
//                     style={{ fill: "#324A5E" }}
//                     d="M158.868,334.76c0-43.172,34.997-78.169,78.169-78.169s78.169,34.997,78.169,78.169L158.868,334.76 L158.868,334.76z"
//                   />{" "}
//                   <path
//                     style={{ fill: "#2B3B4E" }}
//                     d="M237.037,256.593v78.169h78.167C315.206,291.59,280.209,256.593,237.037,256.593z"
//                   />{" "}
//                   <circle
//                     style={{ fill: "#FFD15D" }}
//                     cx="350.815"
//                     cy="293.926"
//                     r="63.104"
//                   />
//                   <g>
//                     <path
//                       style={{ fill: "#F4A200" }}
//                       d="M350.815,369.778c-41.825,0-75.852-34.026-75.852-75.852s34.026-75.852,75.852-75.852 s75.852,34.026,75.852,75.852S392.64,369.778,350.815,369.778z M350.815,243.571c-27.765,0-50.355,22.59-50.355,50.355 c0,27.765,22.59,50.355,50.355,50.355c27.765,0,50.355-22.59,50.355-50.355C401.17,266.161,378.58,243.571,350.815,243.571z"
//                     />{" "}
//                     <rect
//                       x="339.334"
//                       y="265.24"
//                       style={{ fill: "#F4A200" }}
//                       width="22.947"
//                       height="57.372"
//                     />
//                   </g>
//                 </g>
//               </svg>
//             </div>
//             <div className="dropdown inline-block relative rounded-lg z-40">
//               <div className="flex">
//                 <button className={nonActiveStyle + " inline-flex"}>
//                   <span className="mr-1">Guest</span>
//                 </button>
//                 <ThemeSwitcher />
//               </div>
//             </div>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default TopNavbar;
