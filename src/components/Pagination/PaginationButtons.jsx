import style from "./style.module.css";

const PaginationButtons = ({ next, previous, setUrl }) => (
  <div className={style.pagination}>
    <button
      disabled={previous ? false : true}
      onClick={() => {
        setUrl(previous);
      }}
    >
      Previous
    </button>
    <button
      disabled={next ? false : true}
      onClick={() => {
        setUrl(next);
      }}
    >
      Next
    </button>
  </div>
);

export default PaginationButtons;
