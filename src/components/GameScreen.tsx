/* //* Packages Import */
import { useContext, useEffect, useState } from "react";

/* //* Components Import */
import RewardScreen from "src/components/RewardScreen";
import MatchModal from "src/components/MatchModal";

/* //* Utils Import */
import { getImage } from "src/utils/utils";
import { AppContext } from "src/App";

/* //* Data Import */
import { BLUE_CARD_DATA, RED_CARD_DATA } from "src/data/GameData";

/* //* Assets Import */
import blueCard from "src/assets/blueCard.png";
import redCard from "src/assets/redCard.png";
import instructionRed from "src/assets/instruction1.png";
import instructionBlue from "src/assets/instruction2.png";

/* //* Styles Import */
import Styles from "src/styles/GameScreen.module.scss";

const GameScreen = () => {
  const state = useContext(AppContext);
  const [blueCardList, setBlueCardList] =
    useState<cardDetailsListType>(BLUE_CARD_DATA);
  const [redCardList, setRedCardList] =
    useState<cardDetailsListType>(RED_CARD_DATA);
  const [redCardOpened, setRedCardOpened] = useState<boolean>(false);
  const [tries, setTries] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [matchFound, setMatchFound] = useState<boolean>(false);
  const [matchImages, setMatchImages] = useState<Array<JSX.Element>>([]);

  const handleBackButton = () => state?.setSteps((prev) => prev - 1);

  const handleCardUpdates = (
    openedBlueCard: cardDetailsType,
    openedRedCard: cardDetailsType
  ) => {
    if (openedBlueCard.value === openedRedCard.value) {
      setBlueCardList((cardListValue) =>
        cardListValue.map((card) => {
          if (card?.id === openedBlueCard?.id)
            return { ...card, checked: true };
          else return card;
        })
      );
      setRedCardList((cardListValue) =>
        cardListValue.map((card) => {
          if (card?.id === openedRedCard?.id) return { ...card, checked: true };
          else return card;
        })
      );
      setScore((score) => score + 2);
      setMatchFound(true);
    } else {
      setTries((tries) => tries + 1);
    }
    setBlueCardList((cardListValue) =>
      cardListValue.map((card) => {
        return { ...card, opened: false };
      })
    );
    setRedCardList((cardListValue) =>
      cardListValue.map((card) => {
        return { ...card, opened: false };
      })
    );
  };

  const checkMatchAndUpdate = (blueCardListValue: cardDetailsListType) => {
    const openedRedCard = redCardList.filter((card) => card.opened)?.[0];
    const openedBlueCard = blueCardListValue.filter(
      (card: any) => card.opened
    )?.[0];

    setTimeout(() => handleCardUpdates(openedBlueCard, openedRedCard), 500);
  };

  const openCard = (id: number, type: string) => {
    let cardListValue = type === "red" ? redCardList : blueCardList;
    let selectedCard: JSX.Element = <></>;
    cardListValue = cardListValue.map((card) => {
      if (card?.id === id) {
        selectedCard = card?.image;
        return { ...card, opened: true };
      } else return card;
    });
    if (type === "red") {
      setMatchImages([selectedCard]);
      setRedCardList(cardListValue);
      setRedCardOpened(true);
    } else {
      setMatchImages((matchImages) => [...matchImages, selectedCard]);
      setBlueCardList(cardListValue);
      setRedCardOpened(false);
      checkMatchAndUpdate(cardListValue);
    }
  };

  const handleCardOpened = (id: number, type: string) => {
    if (redCardOpened && type === "blue") openCard(id, "blue");
    else if (!redCardOpened && type === "red") openCard(id, "red");
  };

  useEffect(() => {
    if (tries === 4 || score === 12) {
      setBlueCardList(BLUE_CARD_DATA);
      setRedCardList(RED_CARD_DATA);
      setTries(0);
      setGameOver(true);
      setMatchFound(false);
    }
  }, [tries, score]);

  return (
    <div className={Styles.gamePageContainer}>
      <button className={Styles.backButton} onClick={handleBackButton}>
        <img
          src={getImage("backButton", state?.steps as number)}
          loading="lazy"
          alt="back Button"
        />
      </button>
      <div className={Styles.score}>{score}</div>
      {!gameOver && (
        <div className={Styles.outerCardContainer}>
          {!redCardOpened && (
            <img
              src={instructionRed}
              loading="lazy"
              alt="Instruction 1"
              className={Styles.instructionRedImage}
            />
          )}
          <div className={Styles.cardsContainer}>
            {redCardList.map((card: cardDetailsType) => (
              <div className={Styles.cardHolder} key={card?.id}>
                {!card?.checked &&
                  (card.opened ? (
                    card?.image
                  ) : (
                    <img
                      src={redCard}
                      loading="lazy"
                      alt="red Card"
                      onClick={() => handleCardOpened(card?.id, "red")}
                    />
                  ))}
              </div>
            ))}
          </div>
          <div className={Styles.cardsContainer}>
            {redCardOpened && (
              <img
                src={instructionBlue}
                loading="lazy"
                alt="Instruction 2"
                className={Styles.instructionBlueImage}
              />
            )}
            {blueCardList.map((card: cardDetailsType) => (
              <div className={Styles.cardHolder} key={card?.id}>
                {!card?.checked &&
                  (card?.opened ? (
                    card?.image
                  ) : (
                    <img
                      src={blueCard}
                      loading="lazy"
                      alt="Blue Card"
                      onClick={() => handleCardOpened(card?.id, "blue")}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      )}
      {gameOver && <RewardScreen score={score} />}
      {matchFound && (
        <MatchModal matchImages={matchImages} setMatchFound={setMatchFound} />
      )}
    </div>
  );
};

export default GameScreen;
