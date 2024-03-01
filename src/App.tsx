/* //* Packages Import */
import { createContext, useState } from "react";

/* //* Pages Import */
import Homepage from "src/pages/Homepage";

/* //* Assets Import */
import bg from "./assets/bg.png";

/* //* Styles Import */
import Styles from "src/styles/AppStyles.module.scss";

export const AppContext = createContext<{
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
} | null>(null);

function App() {
  const [steps, setSteps] = useState<number>(1);
  const appStates = { steps, setSteps };
  return (
    <AppContext.Provider value={appStates}>
      <div className={Styles.mainContainer}>
        <div className={Styles.background}>
          <img src={bg} loading="lazy" alt="bg" />
        </div>
        <Homepage />
      </div>
    </AppContext.Provider>
  );
}

export default App;
