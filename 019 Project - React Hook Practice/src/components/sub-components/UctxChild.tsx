import {useContext} from 'react'
import CountContext from '../context/CountContext';


const UContextPrac:React.FC = () => {
    const {value,addValue} = useContext(CountContext)!

    return (
        <>
          <strong>Super Child Value {value}</strong>
          <button className='bg-slate-900 rounded-lg text-white p-4' onClick={()=>{addValue(4)}}>Add 4</button>
        </>
    )
}

export default UContextPrac;