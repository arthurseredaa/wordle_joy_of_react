import Game from "../Game";
import Header from "../Header";
import { KEYBOARD, KEYBOARD_UA, WORDS, WORDS_UA } from "../../data";
import { useLanguageContext } from "../LanguageContext";

function App() {
  const { isUAVersion } = useLanguageContext();

  const words = isUAVersion ? WORDS_UA : WORDS;
  const keyboard = isUAVersion ? KEYBOARD_UA : KEYBOARD;

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game words={words} keyboard={keyboard} />
      </div>
    </div>
  );
}

export default App;
