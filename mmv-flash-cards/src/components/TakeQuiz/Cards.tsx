import "./TakeQuiz.css";
import { useContext } from "react";
import { cardContext } from "../Context/AppInterfaces";
import { cardsDatasContext } from "../Context/CardsContext";

const Cards: React.FC<cardContext> = ({
  id,
  subject,
  definition,
  index,
  frontfirst,
}: cardContext) => {
  const ctx = useContext(cardsDatasContext)
  return (
    <div
      key={id}
      className={`cardContainer ${frontfirst ? "begoneAnimate2" : null}`}
      onClick={()=>{ctx?.flipper(id)}}
    >
      {frontfirst ? null : (
        <div className={`definitionTails begoneAnimate`}>{subject}</div>
      )}
      {frontfirst ? (
        <div className={`subjectHeads begoneAnimate`}>{definition}</div>
      ) : null}
    </div>
  );
};

export default Cards;
