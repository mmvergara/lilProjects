
import { useState } from 'react';
import './App.css';
import CountContext from './components/context/CountContext'
import Uctx from './components/Uctx';
import FormValidator from './components/FormValidator'
import ButtonReducer from './components/ButtonReducer'
import Divider from './components/sub-components/Divider';

const App:React.FC = () => {
  const [ value,setValue ] = useState(0)

  const addValue = (a:number):any =>{
    setValue(prev=>prev+1+a)
  }
  return (
    <div className="App">
      <Divider tag={'Reducer'}/>
        <ButtonReducer/>  
      <Divider tag={'Reducer'}/>
        <FormValidator/>
      <Divider tag={'Reducer'}/>
      <Divider tag={'useContext'}/>
        <h4>{value} Main Context</h4>
        <CountContext.Provider value={ {value,addValue} }>
          <Uctx/>
        </CountContext.Provider>
      <Divider tag={'useContext'}/>

    </div>
  );


}

export default App;
