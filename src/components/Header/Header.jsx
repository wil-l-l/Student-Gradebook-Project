import "./Header.css";
import UpdateBtn from "../UpdateBtn/UpdateBtn";

const Header = () => {
  return (
    <header className="header-box">
      <div className="update-btn-box">
        <UpdateBtn content={"ADD"} />
        <UpdateBtn content={"UPD"} />
        <UpdateBtn content={"DEL"} />
      </div>
    </header>
  );
};

export default Header;
