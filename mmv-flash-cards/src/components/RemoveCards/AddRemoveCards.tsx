import { useContext } from "react";
import { cardsDatasContext } from "../Context/CardsContext";
import { cardContext } from "../Context/AppInterfaces";
import EachRemCards from "./EachRemCards";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const AddRemoveCards: React.FC<{ onAdd: Function }> = (props: {
  onAdd: Function;
}) => {
  const x = useContext(cardsDatasContext);

  return (
    <>
      <div>
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Tails</th>
              <th>First Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tdresponsive">Add New Card</td>
              <td className="tdresponsive2">
                <Button
                  variant="success"
                  onClick={() => {
                    props.onAdd(true);
                  }}
                >
                  Add
                </Button>
              </td>
            </tr>
            {x?.cards.map((x: cardContext,index) => {
              return (
                <EachRemCards
                  definition={x.definition}
                  key={x.id}
                  id={x.id}
                  subject={x.subject}
                  index={index}
                  frontfirst={x.frontfirst}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AddRemoveCards;
