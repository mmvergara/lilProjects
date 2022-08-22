
import { useState } from 'react';
import './App.css';
import CountContext from './components/context/CountContext'
import Uctx from './components/Uctx';


const App:React.FC = () => {
  const [ value,setValue ] = useState(0)
  return (
    <div className="App">
      {/* <ButtonReducer crement={incremenetCount}/>   */}
      {/* <FormValidator/> */}
      <h4>{value} Main Context</h4>
      <CountContext.Provider value={ {value,setValue} }>
        <Uctx/>
      </CountContext.Provider>
    </div>
  );


}

export default App;
