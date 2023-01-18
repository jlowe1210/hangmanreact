import Letter from "../Letters/letter";
import styles from "../Letters/Letters.module.css";

function Word(props) {
  return (
    <>
      <div className={styles.word_container}>
        {props.word.split("").map((letter, inx) => {
          return (
            <Letter
              key={letter + inx}
              guesses={props.guesses ? props.guesses : null}
              wordLetters={true}
              letter={letter}
            />
          );
        })}
      </div>
    </>
  );
}

export default Word;
