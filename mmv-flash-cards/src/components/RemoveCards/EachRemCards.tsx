import { cardContext } from "../Context/AppInterfaces";
import { cardsDatasContext } from "../Context/CardsContext";
import { useContext } from "react";
import Button from "react-bootstrap/Button";

import "./AddRemoveCards.css";
const EachRemCards: React.FC<cardContext> = ({
  index,
  id,
  subject,
}: cardContext) => {
  const x = useContext(cardsDatasContext);

  const removeClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    x?.removeCard(id);
  };
  return (
    <tr key={id} style={{animationDelay: `${index!/10 || 0}s`}} className="tdresponsiveMain">
      <td className="tdresponsive">{subject}</td>
      <td className="tdresponsive2">
        <Button variant="danger" onClick={removeClickHandler}>
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default EachRemCards;
