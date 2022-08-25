import "./Modal.css";
import ReactDOM from "react-dom";
import { useRef } from "react";
import uniqid from "uniqid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { cardsDatasContext } from "../Context/CardsContext";
const Modal: React.FC<{ onAdd: Function }> = (props: { onAdd: Function }) => {
  const subjectRef = useRef<HTMLTextAreaElement | null>(null);
  const definitionRef = useRef<HTMLTextAreaElement | null>(null);

  const ctx = useContext(cardsDatasContext);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      subject: subjectRef.current?.value!,
      definition: definitionRef.current?.value!,
      id: uniqid(),
      frontfirst:true,
    };
    ctx?.addCard(data);
    props.onAdd(false);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className="modal-ccontent">
            <form className="modal-content__content " onSubmit={submitHandler}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subject (Heads)</Form.Label>
                <Form.Control ref={subjectRef} type="text" as="textarea" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Definition (Tails)</Form.Label>
                <Form.Control ref={definitionRef} type="text" as="textarea" />
              </Form.Group>

              <Button variant="info" type="submit" className="btnAdd">
                Add Card
              </Button>
            </form>
          </div>
          <div className="modal-backddrop"></div>
        </>,
        document.querySelector("#modalPortal")!
      )}
    </>
  );
};

export default Modal;
