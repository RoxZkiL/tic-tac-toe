import { useState } from "react";
import { TURNS } from "./utils/utils.js";
import { checkWinner, checkEndGame } from "./utils/boardLogic.js";
import confetti from "canvas-confetti";
import { GameInfo } from "./components/GameInfo.jsx";
import { TurnIndicator } from "./components/TurnIndicator.jsx";
import { WinnerModal } from "./components/WinnerModal.jsx";
import { GameBoard } from "./components/GameBoard.jsx";

function App() {
  const [board, setBoard] = useState(() => {
    const boardStoraged = window.localStorage.getItem("board");
    if (boardStoraged) return JSON.parse(boardStoraged);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnStoraged = window.localStorage.getItem("turn");
    return turnStoraged ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  const updateBoard = (index) => {
    if (board[index] !== null || winner !== null) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <GameInfo resetGame={resetGame} />
      <GameBoard squares={board} updateBoard={updateBoard} />
      <TurnIndicator turn={turn} />
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
