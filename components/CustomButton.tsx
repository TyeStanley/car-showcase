"use client";

import Image from "next/image";

const CustomButton = () => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn`}
      onClick={() => console.log("clicked")}
    >
      <span className={`flex-1`}>title</span>
    </button>
  );
};

export default CustomButton;
