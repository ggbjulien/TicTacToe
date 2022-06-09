import styles from "./Info.module.css";

const Info = ({ playerTurn, players, winner }) => {
  return (
    <div className={styles.Info}>
      <div>PLAYER TURN</div>
      <div className={styles.Players}>
        <div>PLAYER ONE</div>
        <div>SCORE</div>
        <div>PLAYER TWO</div>
      </div>
    </div>
  );
};

export default Info;
