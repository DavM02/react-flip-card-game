import "./game.css";
import ChooseLevel from "../ChooseLevel/ChooseLevel";
import Board from "../Board/Board";
import StartGame from "../StartGame/StartGame";
import Confirm from "../ui/Confirm/Confirm";
import ChoosePairCount from "../ChoosePairCount/ChoosePairCount";
import Timer from "../Timer/Timer";
import Statistic from "../Statistic/Statistic";
const Game: React.FC = () => {

 
 
  return (
    <>
      <ChoosePairCount/>
      <ChooseLevel/>
      <StartGame />
      <Board />
      <Timer/>
      <Statistic/>
      <Confirm/>
    </>
  );
};

export default Game;
