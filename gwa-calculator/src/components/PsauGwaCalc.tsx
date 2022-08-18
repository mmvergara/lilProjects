import React, { useEffect, useState } from 'react';
import './PsauGwaCalc.css'
import TableRender from './sub components/TableRender';

interface GradesInfo {
	subjectName:string,
	Units:string,
	Grade:string,
	AggregateGrade:number;
}

const PsauGwaCalc:React.FC = () => {
	
	const [userInput,setUserInput] = useState('')
	const [objInput,setObjInput] = useState<GradesInfo[]>([])
	const [totalUnits,setTotalUnits] = useState(0);
	const [gwa, setGwa] = useState(0)
	useEffect(()=>{
		setObjInput(userInput.split('\n')
		.map((sub:string)=>{return sub.split('\t')})
		.map((sub:string[])=>sub.filter(x=>x!==''))
		.map((sub:string[],i:number,arr)=>{return {
			subjectName:sub[1],
			Units:sub[3],
			Grade:sub[arr.length-3],
			AggregateGrade:(Number(sub[3])*Number(sub[arr.length-3]))}}))
	},[userInput])
	useEffect(()=>{
		setTotalUnits(objInput.reduce((a:number,b:GradesInfo)=>{return Number(a) + Number(b.Units)},0))
	},[objInput])
	useEffect(()=>{
		setGwa(objInput.reduce((a:number,b:GradesInfo)=>{return Number(a) + Number(b.AggregateGrade)},0) / totalUnits)
	},[totalUnits,objInput])


	return (
		<div className='PsauGwaCalcContainer'>

			<h1 className='text-bold text-3xl mb-4 mt-4'>Copy Paste The table inside your psau grades. DONT COPY THE FIRST ROW!!! </h1>
			<div className="userInputs ">
				<textarea onChange={(Event:React.ChangeEvent<HTMLTextAreaElement>,)=>{setUserInput(Event.target.value)}} className='form-control text-area__input' name=""></textarea>
			</div>
			<div className="summary-container font-bold border-cyan-500 border-solid border-3xl border-2 rounded-2xl text-white p-3 mt-4 mb-3">
				<p>Total Units: {totalUnits}</p>
				<p className='underline'>Estimated Gwa: {gwa.toFixed(5)}</p>
			</div>

			<div className="table-container">
				<table className="table table-dark border-cyan-700 border-solid border-3xl border-2 rounded-2xl ">
					<thead>
						<tr>
							<th scope='col'>Subject Name</th>
							<th scope='col'>Units</th>
							<th scope='col'>Grade</th>
							<th scope='col'>Aggregate Grade</th>
						</tr>
					</thead>
					<tbody>
						{objInput.map(x=>{return <TableRender key={Math.random().toString()} Grades={x}/>})}
					</tbody>
				</table>
			</div>



		</div>
	)
}

export default PsauGwaCalc;