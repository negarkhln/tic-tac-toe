import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbol="X" />
          <Player initialName="player 2" symbol="0" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
