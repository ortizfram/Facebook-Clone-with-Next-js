import React, { useState } from "react";

const Button = ({ input, selectedFile, onClick }) => {
  return (
    <div>
      <button
        className="bg-primary text-white w-[100%] py-2 px-5 rounded-lg mt-[30px] disabled:bg-gray-300 disabled:text-gray-500"
        // ___if not input and not file is there then DISABLED
        disabled={!input.trim() && !selectedFile}
        onClick={onClick}
      >
        Post
      </button>
    </div>
  );
};

export default Button;