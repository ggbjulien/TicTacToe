import PlayerTurn from "../PlayerTurn/PlayerTurn";
import styles from "./Info.module.css";

const Info = ({ playerTurn, players, winner }) => {
  return (
    <div className={styles.Info}>
      <PlayerTurn playerTurn={playerTurn} winner={winner} />
      <div className={styles.Players}>
        <div>PLAYER ONE</div>
        <div>SCORE</div>
        <div>PLAYER TWO</div>
      </div>
    </div>
  );
};

export default Info;
