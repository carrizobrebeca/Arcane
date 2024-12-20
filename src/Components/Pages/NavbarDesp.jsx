import { useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
const NavbarDesp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  // Función para manejar el clic en cada botón
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const handleScroll = (id) => {
    console.log(`Scrolling to section: ${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav className="bg-[#090932] text-white text-xs flex justify-start items-center w- md:text-lg border-1 border-t border-gray-500 pt-2 pb-2">
        {location.pathname === "/Arcane-about" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("about")}
          >
            <span
              className={`inline-block ${
                activeButton === "about" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              ABOUT
            </span>
          </button>
        )}

        {location.pathname === "/Arcane-characters" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("characters")}
          >
            <span
              className={`inline-block ${
                activeButton === "characters"
                  ? "border-b-2 border-orange-200"
                  : ""
              }`}
            >
              ALL CHARACTERS
            </span>
          </button>
        )}
   
   {location.pathname === "/Arcane-characters" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("piltover")}
          >
            <span
              className={`inline-block ${
                activeButton === "piltover"
                  ? "border-b-2 border-orange-200"
                  : ""
              }`}
            >
              Piltover
            </span>
          </button>
        )}
   {location.pathname === "/Arcane-characters-detail" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => {
              handleButtonClick("characters");
              navigate("/Arcane-characters");
            }}
          >
            <span
              className={`inline-block ${
                activeButton === "characters"
                  ? "border-b-2 border-orange-200"
                  : ""
              }`}
            >
              ALL CHARACTERS
            </span>
          </button>
        )}
        {location.pathname === "/Arcane-characters-detail" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("detail")}
          >
            <span
              className={`inline-block ${
                activeButton === "detail" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              Details
            </span>
          </button>
        )}

        {location.pathname === "/Arcane-characters" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => {handleButtonClick("zaun");navigate("/Arcane-characters-zaun"); }}
          >
            <span
              className={`inline-block ${
                activeButton === "zaun" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              Zaun
            </span>
          </button>
        )}

        {location.pathname === "/Arcane-characters" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("noxus")}
          >
            <span
              className={`inline-block ${
                activeButton === "noxus" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              Noxus
            </span>
          </button>
        )}

        {location.pathname === "/Arcane" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("home")}
          >
            <span
              className={`inline-block ${
                activeButton === "home" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              HOME
            </span>
          </button>
        )}
        {location.pathname === "/Arcane-serie" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("serie")}
          >
            <span
              className={`inline-block ${
                activeButton === "serie"
                  ? "border-b-2 border-orange-200"
                  : ""
              }`}
            >
              SERIE
            </span>
          </button>
        )}
        {location.pathname === "/Arcane-serie" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => {
              handleButtonClick("temporada1");
              navigate("/Arcane-serie-season1");
            }}
            
          >
            <span
              className={`inline-block ${
                activeButton === "temporada1" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              Temporada 1
            </span>
          </button>
        )}

        {location.pathname === "/Arcane-serie" && (
          <button
            className="pl-4 text-bold text-orange-200"
           
              onClick={() => {
                handleButtonClick("temporada2");
                navigate("/Arcane-serie-season2");
              }}
          >
            <span
              className={`inline-block ${
                activeButton === "temproada2" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              Temporada 2
            </span>
          </button>
        )}
          {location.pathname === "/Arcane-serie-season2" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => {
              handleButtonClick("serie");
              navigate("/Arcane-serie");
            }}
          >
            <span
              className={`inline-block ${
                activeButton === "serie"
                  ? "border-b-2 border-orange-200"
                  : ""
              }`}
            >
              SERIE
            </span>
          </button>
        )}
         {location.pathname === "/Arcane-serie-season1" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => {
              handleButtonClick("serie");
              navigate("/Arcane-serie");
            }}
          >
            <span
              className={`inline-block ${
                activeButton === "serie"
                  ? "border-b-2 border-orange-200"
                  : ""
              }`}
            >
              SERIE
            </span>
          </button>
        )}
        {location.pathname === "/Arcane-serie-season2" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => {
              handleButtonClick("temporada1");
              navigate("/Arcane-serie-season1");
              
            }}
            
          >
            <span
              className={`inline-block ${
                activeButton === "temporada1" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              Temporada 1
            </span>
          </button>
        )}
  {location.pathname === "/Arcane-serie-season1" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => {
              handleButtonClick("temporada1");
              navigate("/Arcane-serie-season1");
              
            }}
            
          >
            <span
              className={`inline-block ${
                activeButton === "temporada1" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              Temporada 1
            </span>
          </button>
        )}
          {location.pathname === "/Arcane-serie-season1" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => {
              handleButtonClick("temporada2");
              navigate("/Arcane-serie-season2");
              
            }}
            
          >
            <span
              className={`inline-block ${
                activeButton === "temporada2" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              Temporada 2
            </span>
          </button>
        )}
        {location.pathname === "/Arcane-serie-season2" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => {
              handleButtonClick("season2")
              
            }}
          >
            <span
              className={`inline-block ${
                activeButton === "season2" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              Temporada 2
            </span>
          </button>
        )}


  

        {location.pathname === "/Arcane-reviews" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("reviews")}
          >
            <span
              className={`inline-block ${
                activeButton === "reviews" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              REVIEWS
            </span>
          </button>
        )}
      </nav>
    </>
  );
};

export default NavbarDesp;
