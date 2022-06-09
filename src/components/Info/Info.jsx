import PlayerTurn from "../PlayerTurn/PlayerTurn";
import styles from "./Info.module.css";

const Info = ({ playerTurn, players, winner }) => {
  return (
    <div className={styles.Info}>
      <PlayerTurn playerTurn={playerTurn} winner={winner} />
      <div className={styles.Players}>
        <div className={styles.Player}>Player {players.playerOne.symbol}</div>
        <div className={styles.PlayersScores}>
          {players.playerOne.score} - {players.playerTwo.score}
        </div>
        <div className={styles.Player}>Player {players.playerTwo.symbol}</div>
      </div>
    </div>
  );
};

export default Info;
