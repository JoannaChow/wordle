import { GamesStore } from "./stores/GamesStore";
import { Game } from "./views/Game/Game";
import "./scss/index.scss";

function App() {
    return (
        <div>
            <Game game={GamesStore.get().currentGame} />
        </div>
    );
}

export default App;
