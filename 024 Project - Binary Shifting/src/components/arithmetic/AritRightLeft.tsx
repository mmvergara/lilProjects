import uniqid from "uniqid";
import { BsArrowDownLeft } from "react-icons/bs";

function decToBin(dec: number) {
  return (dec >>> 0).toString(2);
}

const AritRightLeft: React.FC<{ userInput: string }> = (props: { userInput: string }) => {
  const { userInput } = props;
  const binaryArray = decToBin(Number(userInput)).split("");
  const arrowsToLeft = Array(binaryArray.length).fill(<BsArrowDownLeft />);
  const c = ["0"];
  const shiftedBinaryArray = binaryArray.concat(c);
  const yow = ["0", "0"];
  const shiftedBinaryArrayW = binaryArray.concat(yow);
  return (
    <>
      <h3>Left Shift</h3>
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
          <tr className='leftArrowContainer'>
            {arrowsToLeft.map((arrowToLeft) => (
              <td key={uniqid()}>
                {" "}
                <div className='leftArrow'>{arrowToLeft}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <tr className='shiftedToLeft'>
        {shiftedBinaryArray.map((x, i, a) => (
          <td className='tdBorder' key={uniqid()}>
            {i === a.length - 1 ? <span style={{ color: "red" }}>0</span> : x}
          </td>
        ))}
        <td> = {parseInt(shiftedBinaryArray.join(""), 2)}</td>
      </tr>
      <table className='customTable'>
        <tbody>
          <tr className='leftArrowContainerW'>
            {arrowsToLeft.map((arrowToLeft) => (
              <td key={uniqid()}>
                <div className='leftArrow'>{arrowToLeft}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <tr className='shiftedToLeftw'>
        {shiftedBinaryArrayW.map((x, i, a) => (
          <td className='tdBorder' key={uniqid()}>
            {i === a.length - 1 || i === a.length - 2 ? <span style={{ color: "red" }}>0</span> : x}
          </td>
        ))}
        <td> = {parseInt(shiftedBinaryArrayW.join(""), 2)}</td>
      </tr>
    </>
  );
};

export default AritRightLeft;
