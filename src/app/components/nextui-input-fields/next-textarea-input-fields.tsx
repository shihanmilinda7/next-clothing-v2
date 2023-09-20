import { Input, Textarea } from "@nextui-org/react";
import React from "react";

const NextAreaTextInputField = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Textarea
      variant="flat"
      label={label}
      labelPlacement="inside"
      placeholder="Write here.."
      className="col-span-12 md:col-span-6 mb-6 md:mb-0"
      value={value}
      onChange={onChange}
    />
  );
};

export default NextAreaTextInputField;
