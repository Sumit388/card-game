/* //* Packages Import */
import { useContext } from "react";

/* //* Utils Import */
import { AppContext } from "src/App";
import { getImage } from "src/utils/utils";

/* //* Assets Import */
import monkey from "src/assets/monkey.png";

/* //* Styles Import */
import Styles from "src/styles/Homepage.module.scss";

const FirstScreen = () => {
  const state = useContext(AppContext);

  const handleNextStep = () => state?.setSteps((prev) => prev + 1);

  const handleBackButton = () => state?.setSteps((prev) => prev - 1);

  return (
    <div className={Styles.firstScreen}>
      {state?.steps && state?.steps > 1 && (
        <button className={Styles.backButton} onClick={handleBackButton}>
          <img
            src={getImage("backButton", state?.steps as number)}
            loading="lazy"
            alt="monkey"
          />
        </button>
      )}
      <div className={Styles.monkey}>
        <img src={monkey} loading="lazy" alt="monkey" />
      </div>
      <div className={Styles.textBubble}>
        <img
          src={getImage("bubble", state?.steps as number)}
          loading="lazy"
          alt="textBubble"
        />
      </div>
      <div className={Styles.buttonContainer}>
        <button className={Styles.actionButton} onClick={handleNextStep}>
          <img
            src={getImage("button", state?.steps as number)}
            loading="lazy"
            alt="actionButton"
          />
        </button>
      </div>
    </div>
  );
};

export default FirstScreen;
