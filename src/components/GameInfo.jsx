/* eslint-disable react/prop-types */
export const GameInfo = ({ resetGame }) => {
  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <br />
      <button onClick={resetGame}>Reiniciar juego</button>
    </div>
  );
};
