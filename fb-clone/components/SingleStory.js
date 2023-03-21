import React from "react";

// take title img and post
const SingleStory = ({ title, img, postImg }) => {
  return (
    <div
      className={`relative w-[112px] shadow-md rounded-[15px] pb-2 bg-cover shrink-0 ${postImg} singleStory`}
    >
        {/* ___profile pic and outline */}
      <img
        className="w-[40px] h-[40px] rounded-full object-cover outline outline-primary m-[14px]"
        src={img}
        alt={title}
      />
      {/* ___name */}
      <p className="text-white absolute w-[100%] text-center bottom-2">
        {title}
      </p>
    </div>
  );
};

export default SingleStory;