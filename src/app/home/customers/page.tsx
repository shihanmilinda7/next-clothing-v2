"use client";
import NextAutoFocusTextInputField from "@/app/components/nextui-input-fields/next-autofocus-text-input-fields";
import NextSelectInputField from "@/app/components/nextui-input-fields/next-select-input-fields";
import NextTextInputField from "@/app/components/nextui-input-fields/next-text-input-fields";
import NextTextReadOnlyInputField from "@/app/components/nextui-input-fields/next-text-readonly-input-fields";
import Image from "next/image";

import { useState } from "react";
import { handleSelectChangeEvent } from "../items/utils";
import { CustomerTable } from "@/app/components/customers/table";

export default function Customers() {
  const [customercode, setCustomercode] = useState("");
  const [customerextracode, setCustomerextracode] = useState("");
  const [customername, setCustomername] = useState("");
  const [gender, setGender] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [creditlimit, setCreditlimit] = useState("");
  const [extra, setExtra] = useState("");

  const genderOptionValues: { value: string; name: string }[] = [
    {
      value: "Male",
      name: "Male",
    },
    {
      value: "Female",
      name: "Female",
    },
    {
      value: "Other",
      name: "Other",
    },
  ];
  return (
    <div className="flex ml-3 flex-col  bg-slate-200 w-full">
      <span className="text-3xl font-black leading-none text-gray-900 select-none pt-2">
        Custo<span className="text-indigo-600">mers</span>
      </span>
      <div className="flex w-full">
        <div className="flex flex-col gap-4 mt-4 w-1/3">
          <div className="w-full px-3">
            <NextTextReadOnlyInputField
              label="Code"
              value={customercode}
              onChange={(e) => setCustomercode(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <NextAutoFocusTextInputField
              label="Extra code"
              value={customerextracode}
              onChange={(e) => setCustomerextracode(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <NextTextInputField
              label="Name"
              value={customername}
              onChange={(e) => setCustomername(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <NextTextInputField
              label="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <NextSelectInputField
              label="Gender"
              value={gender}
              onChange={(e) => handleSelectChangeEvent(e, setGender, gender)}
              optionValues={genderOptionValues}
            />
          </div>
          <div className="w-full px-3">
            <NextTextInputField
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <NextTextInputField
              label="Phone Number 1"
              value={phone1}
              onChange={(e) => setPhone1(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <NextTextInputField
              label="Phone Number 2"
              value={phone2}
              onChange={(e) => setPhone2(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <NextTextInputField
              label="Credit limit"
              value={creditlimit}
              onChange={(e) => setCreditlimit(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <NextTextInputField
              label="Extra"
              value={extra}
              onChange={(e) => setExtra(e.target.value)}
            />
          </div>
        </div>
        <div className="w-2/3 mt-1">
          <CustomerTable itemRowObjects={[]} />
        </div>
      </div>
    </div>
  );
}
