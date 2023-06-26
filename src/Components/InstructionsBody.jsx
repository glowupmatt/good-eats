import React from "react";
import classNames from "classnames";
import CheckIcon from "@mui/icons-material/Check";

const InstructionsBody = ({ step, index, checked, setChecked }) => {
  const checkHandler = () => {
    if (!checked.includes(index)) {
      setChecked((prev) => [...prev, index]);
    } else {
      setChecked((prev) => prev.filter((value) => value !== index));
    }
  };

  return (
    <div key={step.number} className="flex gap-4 items-center mb-4">
      <button
        onClick={checkHandler}
        className={classNames(
          "rounded-full max-w-[2rem] block items-center justify-center",
          {
            "border-none bg-red-pink text-white": checked.includes(index),
            "border-gray-default border-solid border text-red-pink":
              !checked.includes(index),
          }
        )}
      >
        <CheckIcon />
      </button>
      {index + 1}
      <p className="lg:text-[1.5rem]">{step.step}</p>
    </div>
  );
};

export default InstructionsBody;
