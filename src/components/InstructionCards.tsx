/* //* Assets Import */
import tag from "src/assets/numberTag.svg";
import path from "src/assets/bgPath.svg";

/* //* Data Import */
import { CARD_DATA } from "src/data/InstructionsData";

/* //* Styles Import */
import Styles from "src/styles/InstructionCards.module.scss";

const InstructionCards = () => {
  return (
    <div className={Styles.instructionContainer}>
      <img
        src={path}
        loading="lazy"
        alt="background path"
        className={Styles.bgPath}
      />
      {CARD_DATA.map((card) => (
        <div className={Styles.cardContainer} key={card.id}>
          <div className={Styles.imageContainer}>{card?.img}</div>
          <div className={Styles.numberTag}>
            <div className={Styles.tagBg}>
              <img src={tag} loading="lazy" alt="number tag" />
            </div>
            <p>0{card?.id}</p>
          </div>
          {card?.secondSubDescription && (
            <div className={Styles.subDescription}>
              {card.secondSubDescription}
            </div>
          )}
          <div className={Styles.description}>{card.description}</div>
          {card?.secondDescription && (
            <div className={Styles.description}>{card.secondDescription}</div>
          )}
          <div className={Styles.subDescription}>{card.subDescription}</div>
          <div className={Styles.cardShadow}></div>
        </div>
      ))}
    </div>
  );
};

export default InstructionCards;
