import "./Header.css";
import RequestBtn from "../RequestBtn/RequestBtn";

const Header = ({setEditMode}) => {
  return (
    <header className="header-box">
      <div className="request-btn-box">
        <RequestBtn content={"ADD"} setEditMode={setEditMode} />
        <RequestBtn content={"UPD"} setEditMode={setEditMode} />
        <RequestBtn content={"DEL"} setEditMode={setEditMode} />
      </div>
    </header>
  );
};

export default Header;
