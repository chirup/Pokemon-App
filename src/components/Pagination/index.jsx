import { useState } from "react";
import style from "./style.module.css";
import PaginationButtons from "./PaginationButtons";
const Pagination = ({ next, previous, setUrl, url }) => {
  const [defaultPageCounts] = useState([10, 20, 50]);
  const defaultUrl = "https://pokeapi.co/api/v2/pokemon";
  const urlObj = new URL(url);
  const offsetParam = urlObj.searchParams.get("offset");
  const limitParam = urlObj.searchParams.get("limit");

  return (
    <div className={style.paginationContainer}>
      <PaginationButtons previous={previous} next={next} setUrl={setUrl} />
      <div className={style.offSetButtons}>
        {defaultPageCounts.map((perPageCount) => (
          <button
            disabled={parseInt(limitParam, 10) === perPageCount}
            onClick={() => {
              setUrl(
                `${defaultUrl}?offset=${offsetParam}&limit=${perPageCount}`
              );
            }}
            key={perPageCount + ""}
          >
            {perPageCount}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
