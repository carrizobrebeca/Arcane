import React from "react";

const ContCard = () => {
  return (
    <>
      <div className="absolute flex justify-center object-cover p-2 box-content border-4 rotate-45" style={{ borderImage: 'linear-gradient(45deg, rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.1))', borderImageSlice: 1 }}>
        <div className="h-48 w-48 object-cover p-2 box-content border-2 rotate-45" style={{ borderImage: 'linear-gradient(45deg, rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.1))', borderImageSlice: 1 }}></div>
      </div>
    </>
  );
};

export default ContCard;
