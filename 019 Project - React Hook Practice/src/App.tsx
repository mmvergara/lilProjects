
import { createContext, useState } from 'react';
import './App.css';
import ButtonReducer from './components/ButtonReducer';
import FormValidator from './components/FormValidator';
import UContextPrac from './components/UContextPrac';

export const UserContext = createContext<any>(null)

const App:React.FC = () => {
  const [value,setValue] = useState(0)
  const incremenetCount = () => {
    setValue((prev)=>{return prev+1})
  }
  return (
    <div className="App">
      <ButtonReducer crement={incremenetCount}/>  
      <FormValidator/>
      <UserContext.Provider value={{value,setValue}}>
        <UContextPrac/>
      </UserContext.Provider>
    </div>
  );


}

export default App;
