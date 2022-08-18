import './TableRender.css'

interface props {
	Grades:{
			subjectName:string,
			Units:string,
			Grade:string,
			AggregateGrade:number;
			}
}
const TableRender:React.FC<props> = (props:props) => {
			const {Units,Grade,AggregateGrade,subjectName} = props.Grades
		return (
			<tr>
				<td>{subjectName}</td>
				<td>{Units}</td>
				<td>{Grade}</td>
				<td>{AggregateGrade.toFixed(2)}</td>
			</tr>
	)
}
export default TableRender;