import styles from './NamesList.module.css'
interface Datas {
	Datas:{ 
		name:string,
		age:number,
		id:string|number
	}
  removeData:Function;
}

const NamesList:React.FC<Datas> = (props:Datas) => {

	return (
		<div> 
			<div className={`${styles.mainContainerLists}`}>
				  <h1 className='bg-slate-700 inline p-1 rounded-sm'>{props.Datas.name} {props.Datas.age}</h1>
          <button className="btn p-1 ml-2 bg-red-900 rounded-sm" onClick={()=>{props.removeData(props.Datas.id)}}>Remove</button>
			</div>
		</div>
	)
}

export default NamesList;