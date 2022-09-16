import uniqid from "uniqid";
import { BsArrowDownRight } from "react-icons/bs";

function decToBin(dec: number) {
  return (dec >>> 0).toString(2);
}

const AritLeftRight: React.FC<{ userInput: string }> = (props: { userInput: string }) => {
  const { userInput } = props;
  const binaryArray = decToBin(Number(userInput)).split("");
  const arrowsToLeft = Array(binaryArray.length).fill(<BsArrowDownRight />);
  const c = ["0"];
  const shiftedBinaryArray = c.concat(binaryArray).slice(0, -1);
  const yow = ["0", "0"];
  const shiftedBinaryArrayW = yow.concat(binaryArray).slice(0, -2);
  return (
    <>
      <h3>Right Shift</h3>

      <table className='customTable'>
        <tbody>
          <tr>
            {binaryArray.map((x) => (
              <td className='tdBorder' key={uniqid()}>
                {x}
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
            {i === 0 ? <span style={{ color: "red" }}>0</span> : x}
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
            {i === 0 || i === 1 ? <span style={{ color: "red" }}>0</span> : x}
          </td>
        ))}
        <td> = {parseInt(shiftedBinaryArrayW.join(""), 2)}</td>
      </tr>
      <div className="paddingBottom"></div>
    </>
  );
};

export default AritLeftRight;
