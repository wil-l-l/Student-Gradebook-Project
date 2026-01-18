import "./Header.css";
import RequestBtn from "../RequestBtn/RequestBtn";

const Header = () => {
  return (
    <header className="header-box">
      <div className="request-btn-box">
        <RequestBtn content={"ADD"} />
        <RequestBtn content={"UPD"} />
        <RequestBtn content={"DEL"} />
      </div>
    </header>
  );
};

export default Header;
