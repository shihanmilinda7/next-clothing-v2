"use client";

import NextDateInputField from "@/app/components/nextui-input-fields/next-date-input-fields";
import NextTextInputField from "@/app/components/nextui-input-fields/next-text-input-fields";
import NextTextReadOnlyInputField from "@/app/components/nextui-input-fields/next-text-readonly-input-fields";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { handleSelectChangeEvent } from "../../items/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomerData,
  fetchFabricData,
  fetchSupplierData,
} from "@/store/purchaseorder/utils";
import NextSelectInputField from "@/app/components/nextui-input-fields/next-select-input-fields";
import NextNumberInputField from "@/app/components/nextui-input-fields/next-number-input-fields";
import NextAreaTextInputField from "@/app/components/nextui-input-fields/next-textarea-input-fields";
import { PoDetailTable } from "@/app/components/page-components/purchaseorder/table";
import NextNumberReadOnlyInputField from "@/app/components/nextui-input-fields/next-number-readonly-input-fields";

export default function PurchaseOrder() {
  const router = useRouter();
  const dispatch = useDispatch();

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

  const customerOptionValues = useSelector(
    (state: any) => state.poReducer.customerOptionValues
  );

  const supplierOptionValues = useSelector(
    (state: any) => state.poReducer.supplierOptionValues
  );

  const fabricOptionValues = useSelector(
    (state: any) => state.poReducer.fabricOptionValues
  );

  const poDetailTableData = useSelector(
    (state: any) => state.poReducer.poDetailTableData
  );

  const shippingmodeOptionValues = [
    {
      value: "FOB",
      name: "FOB",
    },
    {
      value: "CIF",
      name: "CIF",
    },
  ];

  const shippingmethodOptionValues = [
    {
      value: "Flat pack",
      name: "Flat pack",
    },
    {
      value: "m2",
      name: "m2",
    },
  ];

  const currencyOptionValues = [
    {
      value: "USD",
      name: "USD",
    },
    {
      value: "Pound sterling",
      name: "Pound sterling",
    },
  ];

  const orderStatusOptionValues = [
    {
      value: "Initiated",
      name: "Initiated",
    },
    {
      value: "Shipped",
      name: "Shipped",
    },
    {
      value: "Delivered",
      name: "Delivered",
    },
    {
      value: "Closed",
      name: "Closed",
    },
  ];

  const sampleStatusOptionValues = [
    {
      value: "First fit",
      name: "First fit",
    },
    {
      value: "Second fit",
      name: "Second fit",
    },
    {
      value: "Third fit",
      name: "Third fit",
    },
    {
      value: "Fourth fit",
      name: "Fourth fit",
    },
    {
      value: "Sealed",
      name: "Sealed",
    },
    {
      value: "PPS approved",
      name: "PPS approved",
    },
    {
      value: "PS approved",
      name: "PS approved",
    },
  ];

  let tmpSelPoForEdit: any;

  const [purchaseorderid, setPurchaseorderid] = useState(
    tmpSelPoForEdit?.purchaseorderid ?? ""
  );
  const [customerid, setCustomerid] = useState(
    (tmpSelPoForEdit?.customerid
      ? new Set([tmpSelPoForEdit?.customerid.toString()])
      : new Set([])) ?? new Set([])
  );
  const [date, setDate] = useState(tmpSelPoForEdit?.date ?? "");

  const [supplierid, setSupplierid] = useState(
    (tmpSelPoForEdit?.supplierid
      ? new Set([tmpSelPoForEdit?.supplierid.toString()])
      : new Set([])) ?? new Set([])
  );
  const [customerpo, setCustomerpo] = useState(
    tmpSelPoForEdit?.customerpo ?? ""
  );
  const [exfactorydate, setExfactorydate] = useState(
    tmpSelPoForEdit?.exfactorydate ?? ""
  );

  const [shippingmode, setShippingmode] = useState(
    (tmpSelPoForEdit?.shippingmode
      ? new Set([tmpSelPoForEdit?.shippingmode.toString()])
      : new Set([])) ?? new Set([])
  );
  const [customerstylename, setCustomerstylename] = useState(
    tmpSelPoForEdit?.customerstylename ?? ""
  );
  const [department, setDepartment] = useState(
    tmpSelPoForEdit?.department ?? ""
  );

  const [shippingmethod, setShippingmethod] = useState(
    (tmpSelPoForEdit?.shippingmethod
      ? new Set([tmpSelPoForEdit?.shippingmethod.toString()])
      : new Set([])) ?? new Set([])
  );
  const [fabricid, setFabricid] = useState(
    (tmpSelPoForEdit?.fabricid
      ? new Set([tmpSelPoForEdit?.fabricid.toString()])
      : new Set([])) ?? new Set([])
  );
  const [rationpacksize, setRationpacksize] = useState(
    tmpSelPoForEdit?.rationpacksize ?? ""
  );

  const [style, setStyle] = useState(tmpSelPoForEdit?.style ?? "");
  const [colour, setcolour] = useState(tmpSelPoForEdit?.colour ?? "");
  const [description, setDescription] = useState(
    tmpSelPoForEdit?.description ?? ""
  );

  const [supplierprice, setSupplierprice] = useState(
    tmpSelPoForEdit?.supplierprice ?? 0
  );
  const [totalqty, setTotalqty] = useState(tmpSelPoForEdit?.totalqty ?? 0);
  const [totalvalue, setTotalvalue] = useState(
    tmpSelPoForEdit?.totalvalue ?? 0
  );

  const [sellingprice, setSellingprice] = useState(
    tmpSelPoForEdit?.sellingprice ?? ""
  );
  const [colourcode, setColourcode] = useState(
    tmpSelPoForEdit?.colourcode ?? ""
  );
  const [remark, setRemark] = useState(tmpSelPoForEdit?.remark ?? "");
  const [currency, setCurrency] = useState(
    (tmpSelPoForEdit?.currency
      ? new Set([tmpSelPoForEdit?.currency.toString()])
      : new Set(["USD"])) ?? new Set([])
  );

  const [orderstatus, setOrderstatus] = useState(
    (tmpSelPoForEdit?.orderstatus
      ? new Set([tmpSelPoForEdit?.orderstatus.toString()])
      : new Set([])) ?? new Set([])
  );

  const [samplestatus, setSamplestatus] = useState(
    (tmpSelPoForEdit?.samplestatus
      ? new Set([tmpSelPoForEdit?.samplestatus.toString()])
      : new Set([])) ?? new Set([])
  );

  useEffect(() => {
    dispatch(fetchCustomerData(pathname));
    dispatch(fetchSupplierData(pathname));
    dispatch(fetchFabricData(pathname));
  }, []);

  useEffect(() => {
    const totalQty = poDetailTableData.reduce(
      (total: any, obj: any) => total + parseInt(obj.total),
      0
    );
    setTotalqty(totalQty);
  }, [poDetailTableData]);

  useEffect(() => {
    const tmpTotalValue = supplierprice * totalqty
    setTotalvalue(tmpTotalValue)
  }, [totalqty, supplierprice]);
  return (
    <div className="flex ml-3 flex-col bg-slate-200 w-full">
      <span className="text-3xl font-black leading-none text-gray-900 select-none">
        Create new purchase or<span className="text-indigo-600">der</span>
      </span>
      {JSON.stringify(poDetailTableData)}
      <div>
        <div className="w-full flex flex-col gap-4 mt-2 pb-2 pt-2 border border-gray-400 border-solid rounded-lg">
          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3 flex">
              <div className="w-1/2">
                <NextTextReadOnlyInputField
                  label="Purchase order ID"
                  value={purchaseorderid}
                  onChange={(e) => setPurchaseorderid(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <NextSelectInputField
                  label="Order status"
                  value={orderstatus}
                  onChange={(e) =>
                    handleSelectChangeEvent(e, setOrderstatus, orderstatus)
                  }
                  optionValues={orderStatusOptionValues}
                />
              </div>
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextSelectInputField
                label="Customer"
                value={customerid}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setCustomerid, customerid)
                }
                optionValues={customerOptionValues}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextDateInputField
                label="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextSelectInputField
                label="Supplier"
                value={supplierid}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setSupplierid, supplierid)
                }
                optionValues={supplierOptionValues}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Customer PO"
                value={customerpo}
                onChange={(e) => setCustomerpo(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextDateInputField
                label="Ex factory date"
                value={exfactorydate}
                onChange={(e) => setExfactorydate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextSelectInputField
                label="Shipping mode"
                value={shippingmode}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setShippingmode, shippingmode)
                }
                optionValues={shippingmodeOptionValues}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Customer style name"
                value={customerstylename}
                onChange={(e) => setCustomerstylename(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextSelectInputField
                label="Shipping method"
                value={shippingmethod}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setShippingmethod, shippingmethod)
                }
                optionValues={shippingmethodOptionValues}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextSelectInputField
                label="Fabric"
                value={fabricid}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setFabricid, fabricid)
                }
                optionValues={fabricOptionValues}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextNumberInputField
                label="Ratio pack size"
                value={rationpacksize}
                onChange={(e) => setRationpacksize(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Style"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Colour"
                value={colour}
                onChange={(e) => setcolour(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextAreaTextInputField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextSelectInputField
                label="Sample status"
                value={samplestatus}
                onChange={(e) =>
                  handleSelectChangeEvent(e, setSamplestatus, samplestatus)
                }
                optionValues={sampleStatusOptionValues}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mt-1 ml-1 px-2">
              <span className="inline-block mr-1 last:mr-0 py-1 px-2 rounded-full bg-blue-200 text-xs font-semibold text-blue-600 uppercase">
                PO details
              </span>
            </div>
            <PoDetailTable rationpacksizeIn={rationpacksize} />
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3 flex">
              <div className="w-3/5">
                <NextNumberInputField
                  label="Supplier price"
                  value={supplierprice}
                  onChange={(e) => setSupplierprice(e.target.value)}
                />
              </div>
              <div className="w-2/5">
                <NextSelectInputField
                  label="Currency"
                  value={currency}
                  onChange={(e) =>
                    handleSelectChangeEvent(e, setCurrency, currency)
                  }
                  optionValues={currencyOptionValues}
                />
              </div>
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextNumberReadOnlyInputField
                label="Total qty"
                value={totalqty}
                onChange={(e) => setTotalqty(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3 flex">
              <div className="w-3/5">
                <NextNumberReadOnlyInputField
                  label="Total value"
                  value={totalvalue}
                  onChange={(e) => setTotalvalue(e.target.value)}
                />
              </div>
              <div className="w-2/5">
                <NextSelectInputField
                  label="Currency"
                  value={currency}
                  onChange={(e) =>
                    handleSelectChangeEvent(e, setCurrency, currency)
                  }
                  optionValues={currencyOptionValues}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3  flex">
              <div className="w-3/5">
                <NextNumberInputField
                  label="Selling price"
                  value={sellingprice}
                  onChange={(e) => setSellingprice(e.target.value)}
                />
              </div>
              <div className="w-2/5">
                <NextSelectInputField
                  label="Currency"
                  value={currency}
                  onChange={(e) =>
                    handleSelectChangeEvent(e, setCurrency, currency)
                  }
                  optionValues={currencyOptionValues}
                />
              </div>
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextTextInputField
                label="Colour code"
                value={colourcode}
                onChange={(e) => setColourcode(e.target.value)}
              />
            </div>
            <div className="mb-6 md:mb-0 gap-4 w-full px-3 sm:w-1/3">
              <NextAreaTextInputField
                label="Remark"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
