import Cell from "../Cell/Cell";
import styles from "./Row.module.css";

const Row = ({ onClick, row, rowIndex }) => {
  return (
    <div className={styles.Row}>
      {row.map((row, colIndex) => (
        <Cell
          key={colIndex}
          onClick={() => onClick(rowIndex, colIndex)}
          value={row}
        />
      ))}
    </div>
  );
};

export default Row;
