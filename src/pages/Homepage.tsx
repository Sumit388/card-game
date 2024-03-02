/* //* Packages Import */
import { useContext } from "react";

/* //* Components Import */
import FirstScreen from "src/components/FirstScreen";
import GameScreen from "src/components/GameScreen";

/* //* Utils Import */
import { AppContext } from "src/App";

/* //* Styles Import */
import Styles from "src/styles/Homepage.module.scss";

const Homepage = () => {
  const state = useContext(AppContext);
  return (
    <div className={Styles.homepage}>
      {state?.steps && state?.steps <= 4 && <FirstScreen />}
      {state?.steps && state?.steps === 5 && <GameScreen />}
    </div>
  );
};

export default Homepage;
