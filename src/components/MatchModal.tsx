/* //* Packages Import */
import { useEffect } from "react";

/* //* Utils Import */
import { getImage } from "src/utils/utils";

/* //* Styles Import */
import Styles from "src/styles/GameScreen.module.scss";

const MatchModal = ({ matchImages, setMatchFound }: any) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className={Styles.gameOverModal}>
      <div className={Styles.matchModalImageContainer}>
        <p>It's a match !</p>
        <div className={Styles.matchImages}>
          {matchImages[0]}
          {matchImages[1]}
        </div>
      </div>
      <div className={Styles.buttonContainer}>
        <button
          className={Styles.actionButton}
          onClick={() => setMatchFound(false)}
        >
          <img src={getImage("button", 2)} loading="lazy" alt="actionButton" />
        </button>
      </div>
    </div>
  );
};

export default MatchModal;
