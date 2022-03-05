import { GamesStore } from "./stores/GamesStore";
import { Game } from "./views/Game/Game";

function App() {
  return (
    <div>
      <Game game={GamesStore.get().currentGame}/>
    </div>
  );
}

export default App;
