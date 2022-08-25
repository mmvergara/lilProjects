export interface cardContext {
  id: string;
  subject: string;
  definition: string;
  index?: number;
  frontfirst: boolean;
}

export interface appDatas {
  cards: cardContext[];
  removeCard: Function;
  addCard: Function;
  orientationChange: Function;
  flipper: Function;
  shuffler: Function;
}

export interface childrenOnly {
  children: JSX.Element | JSX.Element[];
}
