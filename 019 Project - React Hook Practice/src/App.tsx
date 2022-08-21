
import { createContext } from 'react';
import './App.css';
import ButtonReducer from './components/ButtonReducer';
import FormValidator from './components/FormValidator';
import UContextPrac from './components/UContextPrac';

export const UserContext = createContext<number|null>(null)
function App() {


  return (
    <div className="App">
      <UserContext.Provider value={300}>
        <UContextPrac/>
      </UserContext.Provider>
      <ButtonReducer/>  
      <FormValidator/>
    </div>
  );


}

export default App;
