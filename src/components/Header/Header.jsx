import "./Header.css";
import RequestBtn from "../RequestBtn/RequestBtn";

const Header = ({ editMode, setEditMode, studentInfo }) => {
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

      <div className="profile-box">
        <img src="" alt="" className="profile-img" />
        <p className="profile-name">{studentInfo.name}</p>
      </div>
    </header>
  );
};

export default Header;
