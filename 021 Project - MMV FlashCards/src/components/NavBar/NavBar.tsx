import "./NavBar.css";
const NavBar: React.FC<{ btnChoose: Function }> = ({
  btnChoose,
}: {
  btnChoose: Function;
}) => {
  return (
    <>
      <nav className="nav-container">
        <div
          onClick={() => {
            btnChoose(true);
          }}
        >
          {">Take Test"}
        </div>
        <div
          onClick={() => {
            btnChoose(false);
          }}
        >
          {">Add/Remove Cards"}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
