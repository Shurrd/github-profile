import React from "react";

const Loading = () => {
  return (
    <div className="h-[100vh] bg-gray-100 flex items-center justify-center">
      <div className="lds-grid absolute">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
