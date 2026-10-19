import React from "react";
import { type AlertBoxProps } from "../types/index.ts";

const AlertBox: React.FC<AlertBoxProps> = (props: AlertBoxProps) => {
  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };

  return (
    <div className={`p-4 border-l-4 ${alertStyles[props.type]}`}>
      <div className="flex justify-between items-center">
        <p>{props.message}</p>
        {props.onClose && (
          <button
            onClick={props.onClose}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default AlertBox;
