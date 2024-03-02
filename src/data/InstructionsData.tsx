import card1 from "src/assets/cardImage1.png";
import card2 from "src/assets/cardImage2.png";
import card3 from "src/assets/cardImage3.png";

export const CARD_DATA = [
  {
    id: 1,
    description: "Select a ",
    secondDescription: "pink card.",
    subDescription: "It has images.",
    img: <img src={card1} loading="lazy" alt="card" />,
  },
  {
    id: 2,
    description: "Select a ",
    secondDescription: "blue card.",
    subDescription: "It has alphabets.",
    img: <img src={card2} loading="lazy" alt="card" />,
  },
  {
    id: 3,
    secondSubDescription: "If they’re same",
    description: "Its a match !",
    subDescription: "otherwise retry :(",
    img: <img src={card3} loading="lazy" alt="card" />,
  },
];
