import styles from "./Row.module.css";

const Row = ({ onClick, row, rowIndex }) => {
  return (
    <div className={styles.Row}>
      {row.map((row, colIndex) => (
        <div key={colIndex}>Cell</div>
      ))}
    </div>
  );
};

export default Row;
