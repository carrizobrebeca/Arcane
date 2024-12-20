import { useState } from "react";
import cap1 from "../../assets/Cap1Temp1.png";
import cap2 from "../../assets/Cap2Temp1.png";
import cap3 from "../../assets/Cap3Temp1.png";
import cap4 from "../../assets/Cap4Temp1.png";
import cap5 from "../../assets/Cap5Temp1.png";
import cap6 from "../../assets/Cap6Temp1.png";
import cap7 from "../../assets/Cap7Temp1.png";
import cap8 from "../../assets/Cap8Temp1.png";
import cap9 from "../../assets/Cap9Temp1.png";

const Caps1 = () => {
  const caps = [
    {
      id: 1,
      title: "¡Bienvenidos!",
      time: "43 min",
      image: cap1,
      key: "Cap1",
      description:
        "Las hermanas huerfanas Vi y Powder causan problemas en las calles clandestinas de Zaun tras un robo en la lujosa ciudad de Piltóver.",
    },
    {
      id: 2,
      title: "Algunos misterios están mejor sin resolver",
      time: "40 min",
      image: cap2,
      key: "Cap2",
      description:
        "El idealista inventor Jayce intenta dominar la magia con la ciencia, a pesar de los consejos de su mentor. El líder criminal Silco experimenta con una poderosa sustancia.",
    },
    {
      id: 3,
      title: "La violencia bruta es necesaria para el cambio",
      time: "44 min",
      image: cap3,
      key: "Cap3",
      description:
        "Un enfrentamiento épico entre viejos rivales trae graves consecuencias para la localidad de Zaun. Jayce y Viktor lo arriesgan todo por su investigación.",
    },
    {
      id: 4,
      title: "¡Feliz Día del Progreso!",
      time: "40 min",
      image: cap4,
      key: "Cap4",
      description:
        "Ya que Piltóver se esta beneficiando de su tecnología, Jayce y Viktor piensan en el siguiente paso. Una cara familiar de Zaun reaparece y provoca un caos.",
    },
    {
      id: 5,
      title: "Todo el mundo quiere ser mi enemigo",
      time: "40 min",
      image: cap5,
      key: "Cap5",
      description:
        "La rebelde vigilante Caitlyn recorre el distrito suburbano para localizar a Silco. Jayce se convierte en un blanco al intentar erradicar la corrupción en Piltóver.",
    },
    {
      id: 6,
      title: "Cuando caigan estos muros",
      time: "42 min",
      image: cap6,
      key: "Cap6",
      description:
        "El chico dorado contra su tutor en el Consejo y una tecnología mágica evoluciona rápidamente. Con las autoridades detrás de ella, Jinx debe afrontar su pasado.",
    },
    {
      id: 7,
      title: "El salvador",
      time: "40 min",
      image: cap7,
      key: "Cap7",
      description:
        "Caitlyn y Vi se reúnen en un callejón de Zaun y se dirigen hacia una frenética pelea con una enemiga en común. Viktor toma una complicada decisión.",
    },
    {
      id: 8,
      title: "Agua y aceite",
      time: "40 min",
      image: cap8,
      key: "Cap8",
      description:
        "La desterrada heredera Mel y su madre, que está de visita, intercambian tácticas de combate. Caitlyn y Vi forman una inesperada alianza. Jinx tiene un cambio impactante.",
    },
    {
      id: 9,
      title: "El monstruo que creaste",
      time: "41 min",
      image: cap9,
      key: "Cap9",
      description:
        "Cuando la guerra acecha peligrosamente, los líderes de Piltóver y Zaun reciben un ultimátum. Pero un enfrentamiento fatídico cambia ambas ciudades para siempre.",
    },
  ];
  const [selectedCap, setSelectedCap] = useState(caps[0]);

  // Función para manejar el cambio de capítulo cuando se hace clic en un botón
  const handleButtonClick = (id) => {
    const selected = caps.find((cap) => cap.id === id);
    setSelectedCap(selected); // Actualizar el estado con el capítulo seleccionado
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col">
          <div>
            <div className="pl-36 pr-36 flex justify-between items-center mt-2">
              {caps.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => handleButtonClick(cap.id)} // Llamar al manejador al hacer clic
                  className="p-2 text-white rounded"
                >
                  {cap.id}
                </button>
              ))}
            </div>
            <div className="w-full border-t-2 border-[#dbab7a] mb-6 mt-6"></div>
          </div>
        </div>

        {/* Mostrar el capítulo seleccionado */}
        <div className="grid grid-rows-3 grid-flow-col gap-2 text-left">
          <div class="row-span-3 pr-4">{selectedCap.id}</div>
          <div class="row-span-3 ">
            <img
              src={selectedCap.image}
              alt={selectedCap.title}
              className="h-48 w-96 object-cover rounded-xl"
            />
          </div>
          <div class="col-span-2 text-xl">
            <div className="flex justify-between">
              <h2>{selectedCap.title}</h2>
              <h2 className="text-sm">{selectedCap.time}</h2>
            </div>
          </div>
          <div class="col-span-2 text-xs">
            <div className="inline-block border-l-2 pl-4 pr-2">
              <h2>Clasificación 16+</h2>
              <h2>Violencia</h2>
            </div>
          </div>

          <div class="col-span-2">{selectedCap.description}</div>
        </div>
      </div>
    </>
  );
};

export default Caps1;
