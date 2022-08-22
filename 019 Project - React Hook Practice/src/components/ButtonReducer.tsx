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



const TestEffRed:React.FC = (props) => {

  const [state,dispatchState] = useReducer(buttons,0)

  return(
    <div> 
      <div>State {state}</div>
      <button onClick={()=>{dispatchState('increment')}}>Increment</button>
      <button onClick={()=>{dispatchState('decrement')}}>Decrement</button>
      <button onClick={()=>{dispatchState('reset')}}>Reset</button>
    </div>
  )
}

export default TestEffRed;