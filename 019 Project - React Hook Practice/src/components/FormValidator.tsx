import {useReducer,useEffect,useState,useRef} from 'react'
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
    const emailInputRef = useRef<HTMLInputElement>(null!)

    useEffect(()=>{
      emailInputRef.current?.focus()
    },[])

    return (
      <div>
        <div className={` ${formState.mailIsValid ? 'text-green-200': 'text-red-600'} `}>Email is Valid? {formState.mailIsValid ? 'valid':'nope'}</div>
        <div className={` ${formState.passIsValid ? 'text-green-200': 'text-red-600'} `}>PassWord is Valid? {formState.passIsValid ? 'valid':'nope'}</div>
        <div className={` ${submittable ? 'text-green-200': 'text-red-600'} `}>Form is submittable? {submittable ? 'valid' : 'nope'}</div>

        <input type="text" ref={emailInputRef} placeholder='email' onChange={
          (e:React.ChangeEvent<HTMLInputElement>)=>{dispatchFormState({type:'email_change',val:e.target.value})}
          }/> <br />
        <input type="password" placeholder='password' onChange={
          (e:React.ChangeEvent<HTMLInputElement>)=>{dispatchFormState({type:'password_change',val:e.target.value})}
          }/> <br />
      </div>
    )
}

export default TestEmailRed;