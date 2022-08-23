import "./LayoutPrac.css";

const LayoutPrac: React.FC = () => {
  return (
    <section className="layoutPractice font-thin bg-cyan-900 rounded-3xl text-white p-5">
      <div className="BreakPoints mx-10 font-bold">
        <h2 className="text-3xl text-center xsm:text-cyan-600 sm:text-red-600  md:text-blue-500 lg:text-yellow-500 xl:text-green-400 fullHD:text-black">
          I practice bon how to apply Tailwind classes in this
        </h2>
        <h2 className="text-3xl text-center xsm:text-cyan-600 sm:text-red-600  md:text-blue-500 lg:text-yellow-500 xl:text-green-400 fullHD:text-black tracking-widest">
          Btw Text color change every different media viewport size
        </h2>
      </div>
      <div className="BoxDecorationBreak flex justify-center m-5">
        <h2 className="text-3xl text-center px-5 decoration-clone bg-gradient-to-r rounded-3xl from-cyan-500 inline-block to-transparent">
          Box <br /> Decoration <br /> Break
        </h2>
        <h2 className="text-3xl text-center px-5 decoration-clone bg-gradient-to-l rounded-3xl from-cyan-500 inline-block to-transparent">
          Box <br /> Decoration <br /> Break
        </h2>
      </div>
      <div className="floatPrac text-3xl"></div>
      <div className="buttonPrac text-center">
        <a href="#/" className=" ">
          <button className="hover:text-red-500 hover:px-11 active:translate-y-3 transition-all hover:font-bold hover:shadow-xl text-5xl rounded-full p-3 px-5 bg-white text-black">
            This is a customized Button
          </button>
        </a>
      </div>

      <div className="flexBox flex justify-center items-center flex-wrap my-4">
        <div className="text-4xl w-72 h-72 bg-cyan-500 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-600 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-500 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-600 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-500 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-600 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-500 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-600 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-500 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-600 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-500 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-600 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-500 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-600 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-500 flex justify-center items-center">
          Im a Box
        </div>
        <div className="text-4xl w-72 h-72 bg-cyan-600 flex justify-center items-center">
          Im a Box
        </div>
      </div>
    </section>
  );
};

export default LayoutPrac;
