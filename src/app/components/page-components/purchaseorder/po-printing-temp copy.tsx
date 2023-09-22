// "use client";

// import { toast } from "react-toastify";

// import {
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableColumn,
//   TableHeader,
//   TableRow,
// } from "@nextui-org/react";
// import { useRouter } from "next/navigation";
// import { MdOutlineEditNote } from "react-icons/md";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { useDispatch } from "react-redux";
// import { fetchSelPoDataForEdit } from "@/store/purchaseorder/utils";

// export const PoPrintingTemplate = () => {
//   let pathname: string = "";

//   try {
//     pathname = window.location.href;
//   } catch (error) {}

//   if (pathname) {
//     const r: number = pathname.indexOf("/", 9);
//     if (r !== -1) {
//       pathname = pathname.substring(0, r);
//     }
//   }

//   return (
//     <div>
//       <div className="flex absolute w-[473.4px] h-[33.6px] top-0 left-80 text-2xl font-bold justify-center items-center">
//         A and F Sourcing Limited
//       </div>
//       <div className="flex absolute w-[473.4px] h-[15px] top-[33.6px] left-80 text-xs font-normal justify-center items-end">
//         Unit 150, 981 Great West Road, Brenford, TW8 9DN
//       </div>
//       <div className="flex absolute w-[473.4px] h-[15px] top-[48.6px] left-80 text-xs font-normal justify-center items-end">
//         Tel : +44 020 3948 5008 / +44 020 3883 9577 / www.aandfsourcing.com
//       </div>
//       <div className="flex absolute w-[473.4px] h-[15px] top-[63.6px] left-80 text-xs font-normal justify-center items-end">
//         VAT Registration Number: 273 8855 56
//       </div>
//       {/* <div style=" display:flex; position:absolute;width:473.4px; height:14.4px; top:78.6px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:1px solid black;  ">
//         {" "}
//         ${hlb}
//       </div>
//       <div style=" display:flex; position:absolute;width:473.4px; height:15px; top:93px; left:80px;font-size:11px; font-weight:bold;justify-content:center; align-items:center;border-top:1px solid black; border-bottom:1px solid black;  ">
//         {" "}
//         Commercial Invoice
//       </div>
//       <div style=" display:flex; position:absolute;width:473.4px; height:14.4px; top:108px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:1px solid black;  ">
//         {" "}
//         ${hlt}
//       </div>
//       <div style=" display:flex; position:absolute;width:48.6px; height:15px; top:122.4px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; ">
//         {" "}
//         Bill to:
//       </div>
//       <div style=" display:flex; position:absolute;width:72px; height:15px; top:122.4px; left:340.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; ">
//         {" "}
//         Invoice No:
//       </div>
//       <div style=" display:flex; position:absolute;width:141px; height:15px; top:122.4px; left:412.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; ">
//         {" "}
//         ${invoiceno}
//       </div>
//       <div style=" display:flex; position:absolute;width:224.4px; height:14.4px; top:137.4px; left:80px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; ">
//         {" "}
//         ${customername}
//       </div>
//       <div style=" display:flex; position:absolute;width:72px; height:14.4px; top:137.4px; left:340.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; ">
//         {" "}
//         Date:
//       </div>
//       <div style=" display:flex; position:absolute;width:141px; height:14.4px; top:137.4px; left:412.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; ">
//         {" "}
//         ${date}
//       </div>
//       <div style=" display:flex; position:absolute;width:224.4px; height:87.6px; top:151.8px; left:80px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; ">
//         {" "}
//         ${customeraddress}
//       </div>
//       <div style=" display:flex; position:absolute;width:72px; height:15px; top:151.8px; left:340.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; ">
//         {" "}
//         Payment Terms:
//       </div>
//       <div style=" display:flex; position:absolute;width:141px; height:15px; top:151.8px; left:412.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; ">
//         {" "}
//         ${paymentterms}
//       </div>
//       <div style=" display:flex; position:absolute;width:473.4px; height:14.4px; top:239.4px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-bottom:1px solid black;  ">
//         {" "}
//         ${hlb}
//       </div>
//       <div style=" display:flex; position:absolute;width:473.4px; height:14.4px; top:253.8px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:center;border-top:1px solid black; border-bottom:1px solid black;  ">
//         {" "}
//         Quantities and Descriptions
//       </div>
//       <div style=" display:flex; position:absolute;width:473.4px; height:14.4px; top:268.2px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:1px solid black;  ">
//         {" "}
//         ${hlt}
//       </div>
//       <div style=" display:flex; position:absolute;width:473.4px; height:28.8px; top:282.6px; left:80px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; ">
//         {" "}
//         ${invoicedetails}
//       </div>
//       <div style=" display:flex; position:absolute;width:48.6px; height:14.4px; top:484.2px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; ">
//         {" "}
//         Remarks:
//       </div>
//       <div style=" display:flex; position:absolute;width:473.4px; height:43.2px; top:498.6px; left:80px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-start; ">
//         {" "}
//         ${remarks}
//       </div>
//       <div style=" display:flex; position:absolute;width:48.6px; height:14.4px; top:541.8px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end;border-bottom:1px solid black;  ">
//         {" "}
//         Bank Details
//       </div>
//       <div style=" display:flex; position:absolute;width:473.4px; height:14.4px; top:556.2px; left:80px;font-size:11px; font-weight:normal;justify-content:center; align-items:flex-end;border-top:1px solid black;  ">
//         {" "}
//         ${hlt}
//       </div>
//       <div style=" display:flex; position:absolute;width:48.6px; height:14.4px; top:570.6px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-start; ">
//         {" "}
//         Bank:
//       </div>
//       <div style=" display:flex; position:absolute;width:48.6px; height:14.4px; top:585px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-start; ">
//         {" "}
//         Account Name/ Beneficiary Name:
//       </div>
//       <div style=" display:flex; position:absolute;width:270px; height:14.4px; top:585px; left:232.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; ">
//         {" "}
//         ${accountname}
//       </div>
//       <div style=" display:flex; position:absolute;width:48.6px; height:14.4px; top:599.4px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; ">
//         {" "}
//         Account Number:
//       </div>
//       <div style=" display:flex; position:absolute;width:270px; height:14.4px; top:599.4px; left:232.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; ">
//         {" "}
//         ${accountno}
//       </div>
//       <div style=" display:flex; position:absolute;width:48.6px; height:14.4px; top:613.8px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; ">
//         {" "}
//         Sort Code:
//       </div>
//       <div style=" display:flex; position:absolute;width:270px; height:14.4px; top:613.8px; left:232.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; ">
//         {" "}
//         ${sortcode}
//       </div>
//       <div style=" display:flex; position:absolute;width:48.6px; height:14.4px; top:628.2px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; ">
//         {" "}
//         IBAN A/C NO:
//       </div>
//       <div style=" display:flex; position:absolute;width:270px; height:14.4px; top:628.2px; left:232.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; ">
//         {" "}
//         ${ibanno}
//       </div>
//       <div style=" display:flex; position:absolute;width:48.6px; height:14.4px; top:642.6px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; ">
//         {" "}
//         Bank BIC:
//       </div>
//       <div style=" display:flex; position:absolute;width:270px; height:14.4px; top:642.6px; left:232.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; ">
//         {" "}
//         ${bankbic}
//       </div>
//       <div style=" display:flex; position:absolute;width:48.6px; height:14.4px; top:657px; left:80px;font-size:11px; font-weight:normal;justify-content:left; align-items:flex-end; ">
//         {" "}
//         Branch BIC:
//       </div>
//       <div style=" display:flex; position:absolute;width:270px; height:14.4px; top:657px; left:232.4px;font-size:11px; font-weight:normal;justify-content:flex-start; align-items:flex-end; ">
//         {" "}
//         ${branchbic}
//       </div> */}
//     </div>
//   );
// };
