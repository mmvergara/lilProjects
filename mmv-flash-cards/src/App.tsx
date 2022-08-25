import "./App.css";
import TakeQuiz from "./components/TakeQuiz/TakeQuiz";
import NavBar from "./components/NavBar/NavBar";
import CardsProvider from "./components/Context/CardsContext";
import { useState } from "react";
import AddRemoveCards from "./components/RemoveCards/AddRemoveCards";
import Modal from "./components/Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  const [navState, setNavState] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const navClickHandler = (e: boolean) => {
    setNavState(e);
  };
  const addClickHandler = (e: boolean) => {
    setShowModal(e);
  };

  return (
    <CardsProvider>
      <>
        {showModal && <Modal onAdd={addClickHandler} />}
        <NavBar btnChoose={navClickHandler} />
        {navState && <TakeQuiz btnChoose={navClickHandler} />}
        {!navState && <AddRemoveCards onAdd={addClickHandler} />}
        <Footer />
      </>
    </CardsProvider>
  );
};

export default App;
