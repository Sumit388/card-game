/* //* Styles Import */
import Styles from "src/styles/GameScreen.module.scss";

/* //* Assets Import */
import letterCard from "src/assets/letterCard.png";
import imageCard from "src/assets/fruitCard.png";
import apple from "src/assets/apple.png";
import pineapple from "src/assets/pineaple.png";
import banana from "src/assets/banana.png";
import orange from "src/assets/orange.png";
import strawberry from "src/assets/strawberry.png";
import mango from "src/assets/mango.png";

export const BLUE_CARD_DATA = [
  {
    id: 1,
    value: "a",
    fruit: "apple",
    image: (
      <div className={Styles.letterCard}>
        <img src={letterCard} loading="lazy" alt="Letter card" />
        <p className={Styles.letter}>A</p>
      </div>
    ),
    checked: false,
    opened: false,
  },
  {
    id: 2,
    value: "o",
    fruit: "orange",
    image: (
      <div className={Styles.letterCard}>
        <img src={letterCard} loading="lazy" alt="Letter card" />
        <p className={Styles.letter}>O</p>
      </div>
    ),
    checked: false,
    opened: false,
  },
  {
    id: 3,
    value: "m",
    fruit: "mango",
    image: (
      <div className={Styles.letterCard}>
        <img src={letterCard} loading="lazy" alt="Letter card" />
        <p className={Styles.letter}>M</p>
      </div>
    ),
    checked: false,
    opened: false,
  },
  {
    id: 4,
    value: "b",
    fruit: "banana",
    image: (
      <div className={Styles.letterCard}>
        <img src={letterCard} loading="lazy" alt="Letter card" />
        <p className={Styles.letter}>B</p>
      </div>
    ),
    checked: false,
    opened: false,
  },
  {
    id: 5,
    value: "s",
    fruit: "strawberry",
    image: (
      <div className={Styles.letterCard}>
        <img src={letterCard} loading="lazy" alt="Letter card" />
        <p className={Styles.letter}> S</p>
      </div>
    ),
    checked: false,
    opened: false,
  },
  {
    id: 6,
    value: "p",
    fruit: "pineapple",
    image: (
      <div className={Styles.letterCard}>
        <img src={letterCard} loading="lazy" alt="Letter card" />
        <p className={Styles.letter}>P</p>
      </div>
    ),
    checked: false,
    opened: false,
  },
];

export const RED_CARD_DATA = [
  {
    id: 4,
    value: "b",
    fruit: "banana",
    image: (
      <div className={Styles.imageCard}>
        <img src={imageCard} loading="lazy" alt="Letter card" />
        <img
          src={banana}
          loading="lazy"
          alt="banana"
          className={Styles.fruitImage}
        />
      </div>
    ),
    checked: false,
    opened: false,
  },
  {
    id: 5,
    value: "s",
    fruit: "strawberry",
    image: (
      <div className={Styles.imageCard}>
        <img src={imageCard} loading="lazy" alt="Letter card" />
        <img
          src={strawberry}
          loading="lazy"
          alt="strawberry"
          className={Styles.fruitImage}
        />
      </div>
    ),
    checked: false,
    opened: false,
  },
  {
    id: 2,
    value: "o",
    fruit: "orange",
    image: (
      <div className={Styles.imageCard}>
        <img src={imageCard} loading="lazy" alt="Letter card" />
        <img
          src={orange}
          loading="lazy"
          alt="orange"
          className={Styles.fruitImage}
        />
      </div>
    ),
    checked: false,
    opened: false,
  },

  {
    id: 6,
    value: "p",
    fruit: "pineapple",
    image: (
      <div className={Styles.imageCard}>
        <img src={imageCard} loading="lazy" alt="Letter card" />
        <img
          src={pineapple}
          loading="lazy"
          alt="pineapple"
          className={Styles.fruitImage}
        />
      </div>
    ),
    checked: false,
    opened: false,
  },
  {
    id: 3,
    value: "m",
    fruit: "mango",
    image: (
      <div className={Styles.imageCard}>
        <img src={imageCard} loading="lazy" alt="Letter card" />
        <img
          src={mango}
          loading="lazy"
          alt="mango"
          className={Styles.fruitImage}
        />
      </div>
    ),
    checked: false,
    opened: false,
  },
  {
    id: 1,
    value: "a",
    fruit: "apple",
    image: (
      <div className={Styles.imageCard}>
        <img src={imageCard} loading="lazy" alt="Letter card" />
        <img
          src={apple}
          loading="lazy"
          alt="apple"
          className={Styles.fruitImage}
        />
      </div>
    ),
    checked: false,
    opened: false,
  },
];
