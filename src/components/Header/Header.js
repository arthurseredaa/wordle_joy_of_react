import { clsx } from "../../utils";
import { useLanguageContext } from "../LanguageContext";

function Header() {
  const { isUAVersion, changeLanguage } = useLanguageContext();

  return (
    <header>
      <h1>Word Game</h1>
      <div className="toggle_wrapper">
        <p>EN</p>
        <button
          onClick={changeLanguage}
          className={clsx("toggle", isUAVersion && "active")}
        >
          <div className="ball"></div>
        </button>
        <p>UA</p>
      </div>
    </header>
  );
}

export default Header;
