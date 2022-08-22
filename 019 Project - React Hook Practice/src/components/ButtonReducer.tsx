import { useReducer } from "react";

const buttons = (curState:number,action:{}) => {
  switch(action){
    case 'increment':
      return curState+1
    case 'decrement':
      return curState-1
    case 'reset':
      return 0
    default:
      return curState
  }
}



const TestEffRed:React.FC = () => {

  const [state,dispatchState] = useReducer(buttons,0)

  return(
    <div className="flex justify-center flex-col items-center gap-4"> 
      <div className="text-3xl bg-slate-600 inline rounded-lg p-2 text-white">State is: {state}</div>
      <button className="text-3xl bg-slate-600 rounded-lg p-2 text-white" onClick={()=>{dispatchState('increment')}}>Increment</button>
      <button className="text-3xl bg-slate-600 rounded-lg p-2 text-white" onClick={()=>{dispatchState('decrement')}}>Decrement</button>
      <button className="text-3xl bg-slate-600 rounded-lg p-2 text-white" onClick={()=>{dispatchState('reset')}}>Reset</button>
    </div>
  )
}

export default TestEffRed;