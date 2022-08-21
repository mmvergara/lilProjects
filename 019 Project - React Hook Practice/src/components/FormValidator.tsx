import {useReducer,useEffect,useState} from 'react'

interface actionsVal{
  val:string,
  type:string,
}

const Checker = (state:any,action:actionsVal)=>{

  switch(action.type){
    case 'password_change':
      return {
        ...state,
        passVal:action.val,
        passIsValid:action.val.length > 5,
      }
    case 'email_change':
      return {
        ...state,
        mailVal:action.val,
        mailIsValid:action.val.includes('@'),
      }
  }
}

const TestEmailRed:React.FC = () => {
    const [formState,dispatchFormState] = useReducer(Checker,{
      mailVal:'',
      mailIsValid:false,
      passVal:'',
      passIsValid:false,
    })
    const [submittable,setSubmittable] = useState(false)

    useEffect(()=>{
      setSubmittable(formState.mailIsValid && formState.passIsValid)
      console.log('useeffect triger')
    },[formState.mailIsValid,formState.passIsValid])


    return (
      <div>
        <div>Email is Valid? {formState.mailIsValid ? 'valid':'nope'}</div>
        <div>PassWord is Valid? {formState.passIsValid ? 'valid':'nope'}</div>
        <div>Form is submittable? {submittable ? 'valid' : 'nope'}</div>

        <input type="text" onChange={
          (e:React.ChangeEvent<HTMLInputElement>)=>{dispatchFormState({type:'email_change',val:e.target.value})}
          }/>
        <input type="password" onChange={
          (e:React.ChangeEvent<HTMLInputElement>)=>{dispatchFormState({type:'password_change',val:e.target.value})}
          }/>

        <button>Submit</button>
        <button>reset all</button>
      </div>
    )
}

export default TestEmailRed;