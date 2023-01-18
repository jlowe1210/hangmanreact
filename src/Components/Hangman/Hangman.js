import Body from "./BodyParts/Body";
import Head from "./BodyParts/Head";
import Leftarm from "./BodyParts/Leftarm";
import Leftleg from "./BodyParts/Leftleg";
import Rightarm from "./BodyParts/Rightarm";
import Rightleg from "./BodyParts/Rightleg";
import styles from "./Hangman.module.css";

function Hangman({ wrongGuessCount }) {
  return (
    <div className={styles.hangman}>
      {wrongGuessCount >= 1 ? <Head /> : null}
      {wrongGuessCount >= 2 ? <Body /> : null}
      {wrongGuessCount >= 3 ? <Leftarm /> : null}
      {wrongGuessCount >= 4 ? <Rightarm /> : null}
      {wrongGuessCount >= 5 ? <Leftleg /> : null}
      {wrongGuessCount >= 6 ? <Rightleg /> : null}
    </div>
  );
}

export default Hangman;
