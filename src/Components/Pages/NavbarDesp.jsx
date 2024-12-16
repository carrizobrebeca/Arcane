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
              CHARACTERS
            </span>
          </button>
        )}
        {location.pathname === "/Arcane-characters" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("all")}
          >
            <span
              className={`inline-block ${
                activeButton === "all" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              ALL
            </span>
          </button>
        )}

        {location.pathname === "/Arcane-characters" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("pilt")}
          >
            <span
              className={`inline-block ${
                activeButton === "pilt" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              PILTOVER
            </span>
          </button>
        )}

        {location.pathname === "/Arcane-characters" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("zaun")}
          >
            <span
              className={`inline-block ${
                activeButton === "zaun" ? "border-b-2 border-orange-200" : ""
              }`}
            >
              ZAUN
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
              NOXUS
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
          <button className="pl-4 text-bold text-orange-200">SERIE</button>
        )}
        {location.pathname === "/Arcane-serie" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("noxus")}
          >
            <span
              className={`inline-block ${
                activeButton === "temporada1"
                  ? "border-b-2 border-orange-200"
                  : ""
              }`}
            >
              TEMPORADA1
            </span>
          </button>
        )}
 {location.pathname === "/Arcane-serie" && (
          <button
            className="pl-4 text-bold text-orange-200"
            onClick={() => handleButtonClick("noxus")}
          >
            <span
              className={`inline-block ${
                activeButton === "temporada2"
                  ? "border-b-2 border-orange-200"
                  : ""
              }`}
            >
              TEMPORADA2
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
