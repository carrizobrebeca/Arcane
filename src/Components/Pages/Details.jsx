import React from "react";
import jinx from "../../assets/Jinx.avif";
import style from "./detail.module.css";
import Cont from "./Cont";

const Details = () => {
  return (
    <div className="relative flex justify-center items-center">
     <Cont/>
      <div >
        <img
          src={jinx}
          alt=""
          className="h-72 w-72 object-cover rounded-full p-2"
        />
        <h2 className="bg-cyan-600 text-zinc-100">Jinx</h2>
      </div>
     
      </div>
  );
};

export default Details;
