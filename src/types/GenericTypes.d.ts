type cardDetailsType = {
  id: number;
  value: string;
  fruit: string;
  image: JSX.Element;
  checked: boolean;
  opened: boolean;
};

type cardDetailsListType = Array<cardDetailsType>;

type matchModalPropsType = {
  matchImages: Array<JSX.Element>;
  setMatchFound: React.Dispatch<React.SetStateAction<boolean>>;
};

type rewardScreenPropsType = { score: number };

type progressBarPropsType = { score: number; lives: number; gameOver: boolean };

type instructionsCardsType = {
  id: number;
  description: string;
  secondDescription?: string;
  subDescription: string;
  img: JSX.Element;
  secondSubDescription?: string;
  tagImage: JSX.Element;
};
