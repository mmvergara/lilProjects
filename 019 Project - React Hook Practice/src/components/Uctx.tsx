import {useContext} from 'react'
import CountContext from './context/CountContext';
import UctxChild from './sub-components/UctxChild'

const UContextPrac:React.FC = () => {
    const yo = useContext(CountContext)!

    return (
      <div className='flex items-center justify-center flex-col'>
        <div>First Child Value is {yo.value}</div>
        <button className='bg-slate-900 rounded-lg text-white p-4' onClick={()=>{yo.addValue(1)}}>Add 2 to the context</button>
        <br />
        <UctxChild/>
      </div>
    )
}

export default UContextPrac;