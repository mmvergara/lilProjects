import React, { useState } from "react";
import "./App.css";
import ArithmeticShift from "./components/ArithmeticShift";
import ArithmeticShiftReal from "./components/ArithmeticShitReal";
import Form from "react-bootstrap/Form";

function App() {
  const [state, setState] = useState(false);
  const [userInput, setUserInput] = useState("");
  return (
    <div className='App'>
      <div className='navBar'>
        <div
          onClick={() => {
            setState(false);
          }}
        >
          {">Logical Shift"}
        </div>
        <div
          onClick={() => {
            setState(true);
          }}
        >
          {">Arithmetic Shift"}
        </div>
      </div>
      <p className="author">
        Vergara, Mark Matthew <br />
        BSIT 2-A 2022,2023 - 
        <a href="https://open4tech.com/logical-vs-arithmetic-shift/">reference</a>
      </p>
      <Form.Group className='mb-3 inputForm' controlId='formBasicEmail'>
        <Form.Label>
          <span style={{ fontSize: "2em", textDecoration: "underline" }}>
            Input Decimal &#8601;
          </span>
        </Form.Label>
        <Form.Control
          type='number'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
          placeholder='Input Decimal'
        />
      </Form.Group>

      {state ? (
        <ArithmeticShiftReal userInput={userInput} />
      ) : (
        <ArithmeticShift userInput={userInput} />
      )}
    </div>
  );
}

export default App;
