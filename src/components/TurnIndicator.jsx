/* eslint-disable react/prop-types */
import { Square } from "./Square";
import { TURNS } from "../utils/utils";

export const TurnIndicator = ({ turn }) => {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
};
