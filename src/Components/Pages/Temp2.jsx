import React from "react";
import Navbar from "./Navbar";
import NavbarDesp from "./NavbarDesp";
import cap1 from "../../assets/Cap1Temp1.png";
import Caps1 from "./Caps1";
const Temp2 = () => {
  return (
    <>
      <Navbar />
      <NavbarDesp />
      <div
        className="bg-gradient-to-b from-[#090932] from-50% via-cyan-900 via-90% to-cyan-900 to-90% bg-cover text-orange-300"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "50vh",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 10%",
          margin: "0%",
        }}
      >
        <div className="mt-[-150px]">
          <div className="flex flex-col">
            <div>
              <h2>Episodios</h2>
            </div>
          </div>
          <Caps1 />
        </div>
      </div>
    </>
  );
};

export default Temp2;
