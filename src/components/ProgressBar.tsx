/* //* Assets Import */
import banana from "src/assets/banana.png";

/* //* Styles Import */
import Styles from "src/styles/ProgressBar.module.scss";

const ProgressBar = ({ score, lives, gameOver }: progressBarPropsType) => {
  return (
    <div className={Styles.barContainer}>
      <div className={Styles.outerBox}>
        <div
          className={Styles.innerBox}
          style={{ width: `${(score / 12) * 100}%` }}
        />
        <img src={banana} loading="lazy" alt="banana" />
      </div>
      {!gameOver && <div className={Styles.lives}>Lives: {3 - lives}</div>}
    </div>
  );
};

export default ProgressBar;
