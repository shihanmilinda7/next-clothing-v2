"use client";

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export const InvoiceDetailTableRow = ({
  index,
  tableRowIn,
  onRemoveRow,
  updateTableRows,
}: {
  index: any;
  tableRowIn: any;
  onRemoveRow: any;
  updateTableRows: (taskRow: any) => void;
}) => {
  const [tableRow, setTableRow] = useState(tableRowIn);

  useEffect(() => {
    const q = { ...tableRowIn };
    setTableRow(q);
  }, [tableRowIn]);

  const updateData = (newObject: any) => {
    setTableRow(newObject);
    updateTableRows(newObject);
  };
  return (
    <tr className="even:bg-purple-gray-50/50">
      <td className="text-center py-1 px-4">{index + 1}</td>
      <td className="text-center py-1 px-4">{tableRow.description}</td>
      <td className="text-center py-1 px-4">{tableRow.customerpo}</td>
      <td className="text-center py-1 px-4">{tableRow.style}</td>
      <td className="text-center py-1 px-4">{tableRow.colour}</td>
      <td className="text-center py-1 px-4">{tableRow.totalqty}</td>
      <td className="text-center py-1 px-4">{tableRow.sellingprice}</td>
      <td className="text-center py-1 px-4">{tableRow.totalvalue}</td>
      <td className="text-center py-1 px-4">
        <Button
          isIconOnly
          color="warning"
          variant="light"
          aria-label="Create Item"
        >
          <AiFillMinusCircle
            onClick={() => onRemoveRow(tableRow, index)}
            className="inline-block h-6 w-6 text-red-700 hover:text-red-500 cursor-pointer"
          />
        </Button>
      </td>
    </tr>
  );
};
