import {useContext} from 'react'
import { UserContext } from '../App';

const UContextPrac:React.FC = () => {

    const {value,setValue} = useContext(UserContext)

    return (
        <>
            <div>
                U CONTEXT: {value}
            </div>
            <button onClick={()=>{setValue((prev:any)=>{return prev+1})}}> CHILD U CONTEXT BUTTON</button>
        </>
    )
}

export default UContextPrac;