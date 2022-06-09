import styles from "./Cell.module.css";

const Cell = ({ onClick, value }) => {
  return (
    <div className={styles.Cell} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
