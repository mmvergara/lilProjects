
import { useState } from 'react';
import './App.css';
import NamesList from './components/NamesList';
import UserInput from './components/UserInput';

interface Datas {
  name:string,
  age:number,
  id:string|number
}



const App:React.FC = () => {
  const [data,setData] = useState<Datas[]>([])

  const getDataHandler = (data:Datas)=>{
    setData((prev)=>{
      return [data,...prev]
    })
  }

  const removeHandler = (data:number|string)=>{
    setData((prev)=>{
      return prev.filter(x=>{return x.id !== data})
    })
  }

  return (
    <div className="App">
      <UserInput getData={getDataHandler}/>
      {data.map((x)=>{return <NamesList removeData={removeHandler} key={x.id} Datas={x}/>})}
    </div>
  );

}

export default App;
