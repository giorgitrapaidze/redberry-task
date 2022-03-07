import React from "react";

export default function Pagination(props) {
  const { goBack, goTo, goNext, page } = props;

  return (
    <div className="pagination">
      {" "}
      <div onClick={goBack}>back</div>
      <div className={`${page >= 0 && "active"}`} onClick={() => goTo(0)}>
        1
      </div>
      <div className={`${page >= 1 && "active"}`} onClick={() => goTo(1)}>
        2
      </div>
      <div className={`${page >= 2 && "active"}`} onClick={() => goTo(2)}>
        3
      </div>
      <div className={`${page >= 3 && "active"}`} onClick={() => goTo(3)}>
        4
      </div>
      <div className={`${page >= 4 && "active"}`} onClick={() => goTo(4)}>
        5
      </div>
      <div onClick={goNext}>next</div>
    </div>
  );
}
