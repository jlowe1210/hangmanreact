import "./App.css";
import Letters from "./Components/Letters/Letters";
import Word from "./Components/Word/Word";
import { useEffect, useState } from "react";

import randomWords from "random-words";
import Hangman from "./Components/Hangman/Hangman";

function App() {
  const [word, setWord] = useState(() => {
    return randomWords();
  });
  const [guesses, setGuess] = useState([]);
  const [gameStatus, setGameStatus] = useState(null);

  useEffect(() => {
    const wrongGuessCount = guesses.filter((guess) => {
      return !guess.guessCorrect;
    }).length;

    if (!gameStatus && wrongGuessCount === 6) {
      setGameStatus({ status: "Lost" });
    }

    const wonTheGame =
      word.length ===
      guesses.reduce((pre, cur) => {
        return (pre += cur.Occurrences);
      }, 0);

    if (!gameStatus && wonTheGame) {
      setGameStatus({ status: "Won" });
    }
  }, [guesses, gameStatus, word.length]);

  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function reset() {
    setGuess([]);
    setWord(randomWords());
    setGameStatus(null);
  }

  function selectLetter(letter) {
    setGuess((guesses) => {
      const alreadyGuessed = guesses.find((guess) => {
        return guess.letter === letter;
      });
      if (alreadyGuessed) return guesses;
      return [
        ...guesses,
        {
          letter: letter,
          Occurrences: word.includes(letter)
            ? countOccurrences(letter, word.split(""))
            : 0,
          guessCorrect: word.includes(letter),
        },
      ];
    });
  }

  function countOccurrences(target, arr) {
    let count = 0;
    arr.forEach((value) => {
      if (target === value) {
        count++;
      }
    });
    return count;
  }

  const wrongGuessCount = guesses.filter((guess) => {
    return !guess.guessCorrect;
  }).length;

  return (
    <>
      {gameStatus ? (
        <h1
          style={{ color: gameStatus.status === "Won" ? "green" : "red" }}
          className="status"
        >
          {gameStatus.status}
        </h1>
      ) : null}
      <button onClick={reset}>Reset Game</button>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Hangman wrongGuessCount={wrongGuessCount} />
        <Word word={word} guesses={guesses} />
        <Letters
          gameStatus={gameStatus}
          selectLetter={selectLetter}
          letters={letters}
        />
      </div>
    </>
  );
}

export default App;
