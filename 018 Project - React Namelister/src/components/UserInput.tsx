
import React, { useState } from 'react';
import styles from './UserInput.module.css'
import ErrorModal from './ErrorModal';

interface getter {
	getData:Function;
}

const UserInput:React.FC<getter> = (props:getter) => {
	const [name,setName] = useState('')
	const [age,setAge] = useState('')
  const [showmodal,setShowmodal] = useState({
    visible:false,
    header:'',
    body:'',
  })

	const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if(name.trim().length === 0){
      setShowmodal((prev)=>{return {
      ...prev,
      visible:true,
      header:'Invalid Name',
      body:'Make sure the name input is not empty',}})
    ;return}

	if(Number(age) <= 0 || Number(age) >= 100){
      setShowmodal((prev)=>{return {
      ...prev,
      visible:true,
      header:'Invalid Age',
      body:'',}})
    ;return}

		setName('')
		setAge('')
		props.getData({name:name,age:age,id:Math.random().toFixed(16).toString()})
	}
	const remover = () => {
		setShowmodal((prev)=>{return {
		...prev,
		visible:false,
		header:'',
		body:'',}})
	}

	return (
		<div>
      		<ErrorModal modalSettings={showmodal} removeHandler={remover}/>
			<form onSubmit={submitHandler} className="bg-slate-400 p-2 flex items-center justify-center flex-col gap-2">
				<input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setName(e.target.value)}} className={`${styles.inputBtn} `} value={name} type="text" placeholder="Name" />
				<input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setAge(e.target.value)}} className={`${styles.inputBtn} `} value={age} type="number" placeholder="Age" />
				<button type="submit" className="bg-white p-1 rounded-md border-slate-700 border-2">Submit</button>
			</form>
		</div>
	)
}

export default UserInput;