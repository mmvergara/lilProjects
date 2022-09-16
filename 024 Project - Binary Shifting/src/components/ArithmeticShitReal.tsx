import AritLeftRightReal from "./arithmetic/AritLeftRightReal";
import AritLeftRightRealneg from "./arithmetic/AritLeftRightRealneg";
import AritRightLeft from "./arithmetic/AritRightLeft";

const LogicalShift: React.FC<{ userInput: string }> = (props: { userInput: string }) => {
  return (
    <>
      <div className='arithmeticShiftContainer'>
        <h1>Arithmetic Shift</h1>
        <AritRightLeft userInput={props.userInput} />
        <div className='divider'></div>
        <AritLeftRightReal userInput={props.userInput}/>
        <div className='divider'></div>
        <AritLeftRightRealneg userInput={props.userInput}/>
      <div className="paddingBottom"></div>

      </div>
    </>
  );
};

export default LogicalShift;
