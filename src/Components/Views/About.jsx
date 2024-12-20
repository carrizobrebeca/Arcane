import React from "react";
import Navbar from "../Pages/Navbar";
import NavbarDesp from "../Pages/NavbarDesp";
import Contenedor from "../Pages/Contenedor";
import Card from "../Pages/Card";

const About = () => {
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
       
        <div className="mt-[-150px] text-orange-300">
       
       <p>Sitio colaborativo para Arcane, la serie animada de Netflix
basada en el universo del juego League of Legends de Riot Games .
Navega con precaución, ya que contiene spoilers importantes.</p>
        </div>
      </div>
    </>
  );
};

export default About;
