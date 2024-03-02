/* //* Assets Import */
import bubble1 from "../assets/textBubble1.png";
import bubble2 from "../assets/textBubble2.png";
import bubble3 from "../assets/textBubble3.png";
import buttonImg1 from "../assets/actionButton1.png";
import buttonImg2 from "../assets/actionButton2.png";
import buttonImg3 from "../assets/actionButton3.png";
import buttonImg4 from "../assets/actionButton4.png";
import backButton from "../assets/back.png";

export const getImage = (
  type: "bubble" | "button" | "backButton",
  pageNumber: number
) => {
  switch (true) {
    case type === "bubble" && pageNumber === 1:
      return bubble1;
    case type === "bubble" && pageNumber === 2:
      return bubble2;
    case type === "bubble" && pageNumber === 3:
      return bubble3;
    case type === "button" && pageNumber === 1:
      return buttonImg1;
    case type === "button" && pageNumber === 2:
      return buttonImg2;
    case type === "button" && pageNumber === 3:
      return buttonImg3;
    case type === "button" && pageNumber === 4:
      return buttonImg4;
    case type === "backButton":
      return backButton;
  }
};
