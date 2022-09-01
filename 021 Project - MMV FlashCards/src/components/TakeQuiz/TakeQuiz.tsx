import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Cards from "./Cards";
import "./TakeQuiz.css";
import { useContext, useMemo } from "react";
import { cardsDatasContext } from "../Context/CardsContext";
import { cardContext } from "../Context/AppInterfaces";

const TakeQuiz: React.FC<{ btnChoose: Function }> = (props: { btnChoose: Function }) => {
  console.log("take quiz re render");
  const datas = useContext(cardsDatasContext)!;
  const { cards } = datas;
  const cardsListahanMemoize = useMemo(() => {
    return cards.map((x: cardContext, index: number) => {
      return (
        <div
          style={{ animationDelay: `${index / 10}s` }}
          className='cardsMainContainer mt-4'
          key={x.id}
        >
          <Cards
            definition={x.definition}
            subject={x.subject}
            key={x.id}
            index={index}
            id={x.id}
            frontfirst={x.frontfirst}
          />
        </div>
      );
    });
  }, [cards]);

  return (
    <>
      <div>TakeQuiz</div>
      <div className='configArea'>
        <ButtonGroup aria-label='Basic example'>
          <Button
            variant='danger'
            onClick={() => {
              datas?.shuffler();
            }}
          >
            Shuffle/Reset
          </Button>
          <DropdownButton
            as={ButtonGroup}
            title='Orientation'
            id='bg-nested-dropdown'
            onSelect={(e: string | null) => {
              datas?.orientationChange(e);
            }}
          >
            <Dropdown.Item eventKey='subf'>Subject First (Heads)</Dropdown.Item>
            <Dropdown.Item eventKey='deff'>Definition First (Tails)</Dropdown.Item>
            <Dropdown.Item eventKey='rand'>Random</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>

      {datas?.cards.length === 0 ? (
        <div
          className='cardsMainContainer mt-4'
          onClick={() => {
            props.btnChoose();
          }}
        >
          <h1>Add some cards lol</h1>
        </div>
      ) : (
        cardsListahanMemoize
      )}
    </>
  );
};

export default TakeQuiz;
