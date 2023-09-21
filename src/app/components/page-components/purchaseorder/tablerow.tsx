"use client";

import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export const PoDetailTableRow = ({
  index,
  tableRowIn,
  onAddRow,
  onRemoveRow,
}: {
  index: any;
  tableRowIn: any;
  onAddRow: any;
  onRemoveRow: any;
}) => {
  const [tableRow, setTableRow] = useState(tableRowIn);

  useEffect(() => {
    const q = { ...tableRowIn };
    setTableRow(q);
  }, [tableRowIn]);
  return (
    <tr className="even:bg-purple-gray-50/50">
      <td className="text-center py-1 px-4">
        <Button
          isIconOnly
          color="warning"
          variant="light"
          aria-label="Create Item"
        >
          <AiFillPlusCircle
            onClick={() => onAddRow(tableRow)}
            className="inline-block h-6 w-6 text-indigo-700 hover:text-indigo-500 cursor-pointer"
          />
        </Button>
      </td>
      <td className="text-center py-1 px-4">{index}</td>
      <td className="text-center py-1 px-4">{tableRow.id}</td>
      <td className="text-center py-1 px-4">{tableRow.size}</td>
      <td className="text-center py-1 px-4">{tableRow.ratiopack}</td>
      <td className="text-center py-1 px-4">{tableRow.single}</td>
      <td className="text-center py-1 px-4">{tableRow.total}</td>
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
