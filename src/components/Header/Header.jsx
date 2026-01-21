import "./Header.css";
import RequestBtn from "../RequestBtn/RequestBtn";

const Header = ({ editMode, setEditMode }) => {

  return (
    <header className="header-box">
      <div className="request-btn-box">
        <RequestBtn
          content={"ADD"}
          editMode={editMode}
          setEditMode={setEditMode}
        />
        <RequestBtn
          content={"UPD"}
          editMode={editMode}
          setEditMode={setEditMode}
        />
        <RequestBtn
          content={"DEL"}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </div>
    </header>
  );
};

export default Header;
