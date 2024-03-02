/* //* Packages Import */
import { useEffect, useContext } from "react";

/* //* Utils Import */
import { AppContext } from "src/App";

/* //* Assets Import */
import bg from "src/assets/rewardBg.png";

/* //* Styles Import */
import Styles from "src/styles/GameScreen.module.scss";

const RewardScreen = ({ score }: { score: number }) => {
  const state = useContext(AppContext);
  const handleBackButton = () => state?.setSteps((prev) => prev - 1);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className={Styles.gameOverModal}>
      <img src={bg} loading="lazy" alt="bg" onClick={handleBackButton} />
      <div className={Styles.score}>{score} Banana's</div>
    </div>
  );
};

export default RewardScreen;
