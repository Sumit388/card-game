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

/* //* Styles Import */
import Styles from "src/styles/GameScreen.module.scss";

const GameScreen = () => {
  const state = useContext(AppContext);
  const [blueCardList, setBlueCardList] = useState(BLUE_CARD_DATA);
  const [redCardList, setRedCardList] = useState(RED_CARD_DATA);
  const [redCardOpened, setRedCardOpened] = useState<boolean>(false);
  const [tries, setTries] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [matchFound, setMatchFound] = useState<boolean>(false);

  const handleBackButton = () => state?.setSteps((prev) => prev - 1);

  const handleCardUpdates = (openedBlueCard: any, openedRedCard: any) => {
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

  const checkMatchAndUpdate = (blueCardListValue: any) => {
    const openedRedCard = redCardList.filter((card) => card.opened)?.[0];
    const openedBlueCard = blueCardListValue.filter(
      (card: any) => card.opened
    )?.[0];

    setTimeout(() => handleCardUpdates(openedBlueCard, openedRedCard), 500);
  };

  const openCard = (id: number, type: string) => {
    let cardListValue = type === "red" ? redCardList : blueCardList;
    cardListValue = cardListValue.map((card) => {
      if (card?.id === id) return { ...card, opened: true };
      else return card;
    });
    if (type === "red") {
      setRedCardList(cardListValue);
      setRedCardOpened(true);
    } else {
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
          <div className={Styles.cardsContainer}>
            {redCardList.map((card) => (
              <div className={Styles.cardHolder} key={card?.id}>
                {!card?.checked &&
                  (card.opened ? (
                    card?.fruit
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
            {blueCardList.map((card) => (
              <div className={Styles.cardHolder} key={card?.id}>
                {!card?.checked &&
                  (card?.opened ? (
                    card?.value
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
        <MatchModal
          matchImages={[
            <img src={blueCard} loading="lazy" alt="Blue Card" />,
            <img src={blueCard} loading="lazy" alt="Blue Card" />,
          ]}
          setMatchFound={setMatchFound}
        />
      )}
    </div>
  );
};

export default GameScreen;
