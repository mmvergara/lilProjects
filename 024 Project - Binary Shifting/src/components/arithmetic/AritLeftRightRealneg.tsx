import uniqid from "uniqid";
import { BsArrowDownRight } from "react-icons/bs";

function decToBin(dec: number) {
  return (dec >>> 0).toString(2);
}


const AritLeftRightRealneg: React.FC<{ userInput: string }> = (props: { userInput: string }) => {
  const { userInput } = props;
  // const binaryArray = [1,0,...decToBin(Number(userInput)).split("")];
  const binary = decToBin(Number(userInput))
  let invertStage:any = ['1','0',...binary.split('')]
  invertStage = invertStage.map((x:string)=>x==='0' ? '1':'0')
  invertStage = invertStage.join('')
  const Converted = String(Number(binaryAddition(invertStage,'1'))).split('')
  const arrowsToLeft = Array(Converted.length).fill(<BsArrowDownRight />);
  // const shiftedBinaryArrayW = ['1','1',...binaryArray].slice(0,-2);
  const shiftedBinaryArray = ['1',...Converted].slice(0,-1);
  const shiftedTwice = ['1','1',...Converted].slice(0,-2);
  



  return (
    <>
      <h3>Right Shift (sign bit is 1)</h3>

      <table className='customTable'>
        <tbody>
          <tr>
            {[1,...Converted].map((x,i) => (
              <td className='tdBorder' key={uniqid()}>
                {i === 0 ? <span style={{color:'green'}}>{x}</span>:x}
              </td>
            ))}
            <tr>= -{userInput}</tr>
          </tr>
          <tr className='leftArrowContainerX'>
            {arrowsToLeft.map((arrowToLeft, i, a) => (
              <td key={uniqid()}>
                <div className='leftArrow'>{i === a.length ? "" : arrowToLeft}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <tr className='shiftedToLeftX'>
        {[1,...shiftedBinaryArray].map((x, i,) => (
          <td className='tdBorder' key={uniqid()}>
            {i === 0 ? <span style={{color:'green'}}>{x}</span>:x}
          </td>
        ))}
        <td> = -{Math.ceil(Number(userInput)/2)}</td>
      </tr>
      <table className='customTable'>
        <tbody>
          <tr className='leftArrowContainerWX'>
            {arrowsToLeft.map((arrowToLeft, i, a) => (
              <td key={uniqid()}>
                <div className='leftArrow'>{i === a.length ? "" : arrowToLeft}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <tr className='shiftedToLeftwX'>
        {[1,...shiftedTwice].map((x, i,) => (
          <td className='tdBorder' key={uniqid()}>
            {i === 0 ? <span style={{color:'green'}}>{x}</span>:x}

          </td>
        ))}
        <td> = -{Math.ceil(Number(userInput)/4)}</td>
      </tr>
      <div className="paddingBottom"></div>
    </>
  );
};

export default AritLeftRightRealneg;
function binaryAddition(a:string,b:string){
  var result = "",
      carry = 0;

  while(a || b || carry){
    let sum = +a.slice(-1) + +b.slice(-1) + carry; // get last digit from each number and sum 

    if( sum > 1 ){  
      result = sum%2 + result;
      carry = 1;
    }
    else{
      result = sum + result;
      carry = 0;
    }
    
    // trim last digit (110 -> 11)
    a = a.slice(0, -1)
    b = b.slice(0, -1)
  }
  return result;
}
