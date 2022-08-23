

interface propInt {
  tag:string;
}

const Divider:React.FC<propInt> = (prop:propInt)=>{
  return(
    <div className="bg-slate-500 text-white font-bold mt-1 mb-1">
      {prop.tag}
    </div>
  )
}

export default Divider;