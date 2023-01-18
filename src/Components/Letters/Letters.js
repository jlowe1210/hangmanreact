import Letter from "./letter";
import styles from "./Letters.module.css";
function Letters(props) {
  return (
    <div className={styles.letters_container}>
      {props.letters.map((letter) => {
        return (
          <Letter
            key={letter}
            wordLetters={false}
            onSelectLetter={
              !props.gameStatus ? () => props.selectLetter(letter) : null
            }
            letter={letter}
          />
        );
      })}
    </div>
  );
}

export default Letters;
