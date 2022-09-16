import AritRightLeft from "./arithmetic/AritRightLeft";
import AritLeftRight from "./arithmetic/AritLeftRight";

const ArithmeticShift: React.FC<{ userInput: string }> = (props: { userInput: string }) => {


  return (
    <>
      <div className='arithmeticShiftContainer'>
        <h1>Logical Shift</h1>
        <AritRightLeft userInput={props.userInput} />
        <div className="divider"></div>
        <AritLeftRight userInput={props.userInput}/>
      </div>
    </>
  );
};

export default ArithmeticShift;
