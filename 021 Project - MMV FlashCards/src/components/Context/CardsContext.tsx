import { createContext, useEffect, useState } from "react";
import { appDatas, childrenOnly, cardContext } from "./AppInterfaces";

export const cardsDatasContext = createContext<appDatas | null>(null);

const CardsProvider: React.FC<childrenOnly> = (props: childrenOnly) => {
  const localStorageGet = localStorage.getItem("Cards");
  const unpackLocalStorage = JSON.parse(localStorageGet!) || [];
  const [cardsState, setCardsState] = useState<cardContext[]>([
    ...unpackLocalStorage,
  ]);

  const revCard = (id: string) => {
    setCardsState((prev: cardContext[]) => {
      return prev.filter((x) => x.id !== id);
    });
  };

  useEffect(() => {
    localStorage.setItem("Cards", JSON.stringify(cardsState));
  }, [cardsState]);

  const addCard = (Data: cardContext) => {
    setCardsState((prev: cardContext[]) => {
      return [...prev, Data];
    });
  };
  const onChangeOrientationHandler = (e: string) => {
    switch (e) {
      case "subf":
        setCardsState((prev: cardContext[]) => {
          return prev.map((x) => {
            return { ...x, frontfirst: true };
          });
        });
        break;

      case "deff":
        setCardsState((prev: cardContext[]) => {
          return prev.map((x) => {
            return { ...x, frontfirst: false };
          });
        });
        break;

      case "rand":
        setCardsState((prev: cardContext[]) => {
          return prev.map((x) => {
            return {
              ...x,
              frontfirst: [true, false][Math.floor(Math.random() * 2)],
            };
          });
        });
        break;

      default:
        break;
    }
  };

  const onFlipHandler = (id: string) => {
    setCardsState((prev: cardContext[]) => {
      return prev.map((x) => {
        if (x.id === id) {
          return { ...x, frontfirst: !x.frontfirst };
        }
        return x;
      });
    });
  };
  function shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  const shuffleHandler = () => {
    setCardsState((prev: cardContext[]) => [...shuffle(prev)]);
  };
  const cardsDataValues: appDatas = {
    cards: cardsState,
    removeCard: revCard,
    addCard: addCard,
    orientationChange: onChangeOrientationHandler,
    flipper: onFlipHandler,
    shuffler: shuffleHandler,
  };

  return (
    <cardsDatasContext.Provider value={cardsDataValues}>
      {props.children}
    </cardsDatasContext.Provider>
  );
};

export default CardsProvider;
