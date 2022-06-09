import styles from "./PlayerTurn.module.css";

const PlayerTurn = ({ playerTurn, winner }) => {
  const renderPlayerTurn = () => {
    if (winner) {
      if (winner === "draw") {
        return <div className={styles.PlayerTurn}>It's a draw !</div>;
      } else if (winner === "X" || winner === "O") {
        return <div className={styles.PlayerTurn}>Player {winner} win !</div>;
      }
    } else {
      return (
        <div className={styles.PlayerTurn}>Player Turn : {playerTurn}</div>
      );
    }
  };

  return <>{renderPlayerTurn()}</>;
};

export default PlayerTurn;
