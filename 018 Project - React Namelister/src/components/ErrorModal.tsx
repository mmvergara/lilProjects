import styles from './ErrorModal.module.css'
interface props {
  modalSettings:{
    visible:boolean,
    header:string,
    body:string,
  },
  removeHandler:Function
}

const ErrorModal:React.FC<props> = (props) => {

    return (
      <>
      {props.modalSettings.visible ?
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.subContainer}`}>
          <header>
            <h2 className='text-3xl font-bold mt-2 mb-1'>{props.modalSettings.header}</h2>
          </header>
          <div>{props.modalSettings.body}</div>
          <footer className='text-center  mt-2 mb-1'>
            <button onClick={()=>{props.removeHandler()}} className= 'bg-slate-300 p-2 font-bold mt-2 mb-1'>Okay</button>
          </footer>
        </div>
      </div>
      :null}

      </>
    )
}
export default ErrorModal;