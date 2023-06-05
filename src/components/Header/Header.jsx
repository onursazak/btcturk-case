import Logo from "@/assets/icons/logo";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.headerContainer}>
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
