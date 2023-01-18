import styles from "./Letters.module.css";

function Letter(props) {
  function showIfGuessCorrect(letter) {
    if (!props.guesses) return false;

    return props.guesses.some((guess) => {
      return guess.letter === letter && guess.guessCorrect;
    });
  }

  return (
    <>
      <div
        onClick={props.onSelectLetter}
        className={props.wordLetters ? styles.word_letter : styles.letter}
      >
        <p
          style={{
            visibility: showIfGuessCorrect(props.letter) ? "visible" : null,
          }}
        >
          {props.letter}
        </p>
      </div>
    </>
  );
}

export default Letter;
