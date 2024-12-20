import jinx from "./assets/Jinx.avif";
import vi from "./assets/Vi.jpg";
import vander from "./assets/Vander.jpg";
import ekko from "./assets/Ekko.avif";
import claggor from "./assets/Claggor.png";
import mylo from "./assets/Mylo.png";
import cait from "./assets/Cait.png";
import jayce from "./assets/Jayce.png";
import mel from "./assets/Mel.png";
import viktor from "./assets/Viktor.png";
import heimerdinger from "./assets/Heimerdinger.jpg";
import doctor from "./assets/Doctor.png";
import silco from "./assets/Silco.png";
import sevika from "./assets/Sevika.png";
import ambessa from "./assets/Ambessa.jpeg";


const data = [
  
  {
    id: 1,
    name: "Jinx",
    image: {
      src: jinx,
      key: "jinx",
    },
    description:
      "Anteriormente conocida como Powder, es uno de los personajes principales de Arcane. Era una huérfana, zaunita después de que sus padres fueran asesinados por vigilantes. Junto a su hermana Vi, fueron adoptadas por Vander, el entonces protector de los Carriles. Abandonada por Vi después de la muerte de Vander, quedó bajo el cuidado de Silco, y se convirtió en una anarquista, alimentada por el odio hacia su hermana y atormentada por sus errores, rechaza por completo su antigua identidad.",
    interesRomantico:
      "Ekko - en un universo alternativo donde Jinx no existe, y es simplemente Powder.",
  },
  {
    id: 2,
    name: "Vi",
    image: {
      src: vi,
      key: "vi",
    },
    description: "Conocida como Vi. Cuando sus padres fueron asesinados por los vigilantes de Piltover , ella y su hermana Powder fueron acogidas por Vander . Después de una serie de eventos posteriores a un atraco que salió mal, Vi fue separada de su hermana y enviada a la prisión Stillwater , liberada años después por una vigilante recientemente despedida, Caitlyn Kiramman, que necesitaba su ayuda para cazar a un peligroso criminal zaunita.",
    interesRomantico: "Caitlyn",
  },
  {
    id: 3,
    name: "Vander",
    image: {
      src: vander,
      key: "vander",
    },
    description: "Líder y protector de la ciudad subterránea. Determinado y celoso, Vander hizo todo lo que pudo en su vida para garantizar la seguridad de quienes estaban bajo su protección: los residentes de Zaun y, más específicamente, los cuatro niños que había tomado bajo su protección. Cuando una serie de eventos lo obliga a elegir entre una tregua establecida entre Zaun y Piltover y sus hijos, la vida de Vander cambia radicalmente debido a su pasado.",
    interesRomantico: "Desconocido",
  },
  {
    id: 4,
    name: "Ekko",
    image: {
      src: ekko,
      key: "ekko",
    },
    description: "Uno de los muchos niños que crecieron en las fisuras. Tras la muerte de su mentor y la desaparición de sus amigos, Ekko encuentra una forma de sobrevivir por su cuenta y ayudar a otros a luchar contra el reinado de Silco sobre su hogar, liderando a los Firelights.",
    interesRomantico: "Powder - en un universo alternativo donde Jinx no existe.",
  },
  {
    id: 5,
    name: "Claggor",
    image: {
      src: claggor,
      key: "claggor",
    },
    description:
      "Claggor hijo adoptivo de Vander . A través de él, pasó la mayor parte de su tiempo con Vi, Powder y Mylo. Claggor se convirtión en el músculo de su pequeño grupo.",
    interesRomantico: "Desconocido",
  },
  {
    id: 6,
    name: "Mylo",
    image: {
      src: mylo,
      key: "mylo",
    },
    description:
      "Mylo hijo adoptivo de Vander . A través de él, pasó la mayor parte de su tiempo con Vi , Powder y Mylo . Claggor se convirtión en el músculo de su pequeño grupo.",
    interesRomantico: "Gert- (Crush, en un universo alternativo).",
  },
  {
    id: 7,
    name: "Caitlyn Kiramman",
    image: {
      src: cait,
      key: "cait",
    },
    description:
      "Es la descendiente de una de las familias más ricas e influyentes de Piltover. Ansiosa por demostrar su valía a pesar de la poderosa sombra y la naturaleza autoritaria de su madre, se unió a los vigilantes. Con el Sheriff Marcus, bloqueando constantemente sus esfuerzos por investigar a fondo una conspiración, Caitlyn se embarca por su cuenta en la búsqueda de respuestas y obtiene más de lo que esperaba.",
    interesRomantico: "Vi - Maddie Nolen (Temporada 2, breve aventura)",
  },
  {
    id: 8,
    name: "Jayce Talis",
    image: {
      src: jayce,
      key: "jayce",
    },
    description:
      "Es un científico e innovador que tras años de éxito liderando el progreso científico y económico de la ciudad, se convirtió en miembro del Consejo de Piltover. Jayce y Viktor son responsables de la creación de Hextech y sus eventos posteriores.",
    interesRomantico: "Mel Medarda",
  },
  {
    id: 9,
    name: "Mel Medarda",
    image: {
      src: mel,
      key: "mel",
    },
    description:
      "Es hija de Ambessa Medarda e integrante del Consejo de Piltover. Estaba interesada en los experimentos de Jayce con la magia.",
    interesRomantico: "Jayce Talis",
  },
  {
    id: 10,
    name: "Viktor",
    image: {
      src: viktor,
      key: "viktor",
    },
    description:
      "El futuro Heraldo. Es el brillante asistente de Heimerdinger, nacido en Zaun. Decide unirse a Jayce y su teoría Hextech.",
    interesRomantico: "Sky Young",
  },
  {
    id: 11,
    name: "Heimerdinger",
    image: {
      src: heimerdinger,
      key: "heimerdinger",
    },
    description:
      "Es una figura reconocida y respetada en Piltover. Científico, profesor, decano y jefe del Consejo, Heimerdinger ha ayudado a moldear las mentes de los jóvenes académicos de la Academia. Vivió durante más de tres siglos, con la esperanza de guiar y advertir a los estudiantes sobre los posibles riesgos de la magia.",
    interesRomantico: "Desconocido",
  },
  {
    id: 12,
    name: "Dr. Corin Reveck",
    image: {
      src: doctor,
      key: "doctor",
    },
    description:
      "Es un científico creador del brillo y un misterioso biólogo que trabaja con Silco, y luego es reclutado por Ambessa para ayudar a revivir a Viktor.",
    interesRomantico: "Jayce Talis",
  },
  {
    id: 13,
    name: "Silco",
    image: {
      src: silco,
      key: "silco",
    },
    description:
      "Es el poderoso y ambicioso líder zaunita. Padre adoptivo de Jinx. Controlaba silenciosamente Zaun bajo las narices de la autoridad de Piltover. Vander era como su hermano, pero sus difrencias los llevaron al odio",
    interesRomantico: "Desconocido",
  },
  {
    id: 11,
    name: "Sevika",
    image: {
      src: sevika,
      key: "sevika",
    },
    description:
      "Se une a la causa de Silco, después ver el pacifismo de Vander como una debilidad. Se convierte en la mano derecha de Silco y es principal ejecutora. Después de la muerte de Silco, ayuda a Jinx a convertirse en un símbolo para Zaun.",
    interesRomantico: "Desconocido",
  },
  {
    id: 12,
    name: "Ambessa Medarda",
    image: {
      src: ambessa,
      key: "ambessa",
    },
    description:
      "Fue una poderosa caudillo y estadista de Noxus. Madre de Mel Medarda ",
    interesRomantico: "Desconocido",
  },
];
export default data;