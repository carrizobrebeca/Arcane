import React from "react";
import Navbar from "../Pages/Navbar";
import NavbarDesp from "../Pages/NavbarDesp";
import netflix from "../../assets/Netflix.png";
const Serie = () => {
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
          <div class="grid grid-rows-3 grid-flow-col gap-10 text-left">
            <div class="row-span-3 ">16+ Violencia</div>
            <div class="col-span-2">
              Generos: Series de accion y aventura. Series de EE. UU. Series de
              fantasía.
            </div>
            <div class="row-span-2 col-span-2 ">
              En esta saga ganadora del Emmy®, dos hermanas tienen un amargo
              enfrentamiento y acaban en bandos opuestos de una guerra
              arrasadora. «Una verdadera obra maestra».
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h2 className="p-2">Ve todo arder ahora </h2>
            <a href="https://www.netflix.com/search?q=ar&jbv=81435684">
              <img src={netflix} alt="" className=" h-30 w-20 bject-cover" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Serie;
