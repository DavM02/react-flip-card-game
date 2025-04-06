import "./styles.css";
import Layout from "./components/Layout/Layout";
import Game from "./components/Game/Game";
import GameContextProvider from "./context/GameContextProvider";

export default function App() {

 
  return (
    <div className="App">
      <GameContextProvider>
        <Layout>
          <Game />
        </Layout>
      </GameContextProvider>
    </div>
  );
}
