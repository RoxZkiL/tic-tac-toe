/* eslint-disable react/prop-types */
import { Square } from "./Square";

export const GameBoard = ({ squares, updateBoard }) => {
  return (
    <section className="game">
      {squares.map((square, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        );
      })}
    </section>
  );
};
