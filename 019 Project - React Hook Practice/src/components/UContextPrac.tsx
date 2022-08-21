import {useContext} from 'react'
import { UserContext } from '../App';

const UContextPrac:React.FC = () => {
    const message = useContext(UserContext)
    return (
        <>
            <div>
                {message}
            </div>
        </>
    )
}

export default UContextPrac;