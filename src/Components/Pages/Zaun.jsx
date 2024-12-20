import React from "react";
import Navbar from "./Navbar";
import NavbarDesp from "./NavbarDesp";
import Card from "./Card";

//import characters from "./data.js";

const Zaun = () => {
  return (
    <>
       <Navbar />
    <NavbarDesp />
      <div className="bg-gradient-to-b from-[#090932] from-50% via-cyan-900 via-90% to-cyan-900 to-90% bg-cover "
        style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            minHeight: '50vh',
            height: '100vh',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 10%",
            margin: "0%",
           
          }}>
       
        <div className="mt-[-150px]">
       
        <Card />
        </div>
      </div>
    </>
  );
};

export default Zaun;
