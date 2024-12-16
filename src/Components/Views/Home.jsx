import React from "react";
import Navbar from "../Pages/Navbar";
import NavbarDesp from "../Pages/NavbarDesp";

const Home = () => {
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
            padding: "-10px",
            margin: "-10px",
           
          }}>
       
        <div>

        </div>
      </div>
    </>
  );
};

export default Home;
