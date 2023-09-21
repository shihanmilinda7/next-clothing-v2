"use client";

import NewFabric from "@/app/components/page-components/fabrics/addnew";
import { FabricTable } from "@/app/components/page-components/fabrics/table";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PurchaseOrder() {
  const router = useRouter();

  //get pathname
  let pathname: string = "";

  try {
    pathname = window.location.href;
  } catch (error) {}

  if (pathname) {
    const r: number = pathname.indexOf("/", 9);
    if (r !== -1) {
      pathname = pathname.substring(0, r);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = async (event: any) => {
    if (event.key === "F2" || event.keyCode === 113) {
      createNewPo();
    }
  };

  const createNewPo = () => {
    router.push("/home/purchaseorder/newpurchaseorder");
  };
  return (
    <div className="flex ml-3 flex-col bg-slate-200 w-full">
      <span className="text-3xl font-black leading-none text-gray-900 select-none">
        Purchase or<span className="text-indigo-600">der</span>
      </span>
      <div className="justify-end w-full flex mt-3">
        <button
          onClick={createNewPo}
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Create New - F2
        </button>
      </div>
      <div className="flex w-full mt-3 item-center justify-center">
        {/* <FabricTable
          fabricRowData={fabricRowData}
          setReloadTable={toggleReloadTable}
        /> */}
      </div>
    </div>
  );
}
