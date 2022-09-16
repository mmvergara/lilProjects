import uniqid from "uniqid";
import { BsArrowDownRight } from "react-icons/bs";

function decToBin(dec: number) {
  return (dec >>> 0).toString(2);
}

const AritLeftRightReal: React.FC<{ userInput: string }> = (props: { userInput: string }) => {
  const { userInput } = props;
  const binaryArray = [0,...decToBin(Number(userInput)).split("")];
  const arrowsToLeft = Array(binaryArray.length).fill(<BsArrowDownRight />);
  const shiftedBinaryArray = [0,...binaryArray].slice(0,-1);
  const shiftedBinaryArrayW = [0,0,...binaryArray].slice(0,-2);
  return (
    <>
      <h3>Right Shift (sign bit is 0)</h3>

      <table className='customTable'>
        <tbody>
          <tr>
            {binaryArray.map((x,i) => (
              <td className='tdBorder' key={uniqid()}>
                {i === 0 ? <span style={{color:'green'}}>{x}</span>:x}
              </td>
            ))}
            <tr>= {userInput}</tr>
          </tr>
          <tr className='leftArrowContainerX'>
            {arrowsToLeft.map((arrowToLeft, i, a) => (
              <td key={uniqid()}>
                <div className='leftArrow'>{i === a.length - 1 ? "" : arrowToLeft}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <tr className='shiftedToLeftX'>
        {shiftedBinaryArray.map((x, i, a) => (
          <td className='tdBorder' key={uniqid()}>
            {i === 0 ? <span style={{color:'green'}}>{x}</span>:x}
          </td>
        ))}
        <td> = {parseInt(shiftedBinaryArray.join(""), 2)}</td>
      </tr>
      <table className='customTable'>
        <tbody>
          <tr className='leftArrowContainerWX'>
            {arrowsToLeft.map((arrowToLeft, i, a) => (
              <td key={uniqid()}>
                <div className='leftArrow'>{i === a.length - 1 ? "" : arrowToLeft}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <tr className='shiftedToLeftwX'>
        {shiftedBinaryArrayW.map((x, i, a) => (
          <td className='tdBorder' key={uniqid()}>
            {i === 0 ? <span style={{color:'green'}}>{x}</span>:x}

          </td>
        ))}
        <td> = {parseInt(shiftedBinaryArrayW.join(""), 2)}</td>
      </tr>
    </>
  );
};

export default AritLeftRightReal;
