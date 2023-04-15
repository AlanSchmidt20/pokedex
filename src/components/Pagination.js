import React from "react";
import { LeftArrow, RightArrow } from "../components/ArrowSvg";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button onClick={onLeftClick} className="pagination-btn">
        <div className="icon">
          <LeftArrow />
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick} className="pagination-btn">
        <div className="icon">
          <RightArrow />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
