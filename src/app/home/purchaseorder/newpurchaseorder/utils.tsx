export const handleSelectChangeEvent = (
    e: any,
    onChange: any,
    selectedValue: any
  ) => {
    // console.log("selectedValue.values().next().value",selectedValue.values().next().value,)
    if (e.target.value === "") {
      onChange(new Set([]));
    } else {
      onChange(new Set([e.target.value]));
    }
  };