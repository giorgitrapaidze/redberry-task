import React from "react";

export default function Pagination(props) {
  const { goBack, goTo, goNext, page } = props;

  return (
    <div className="pagination">
      {" "}
      <div onClick={goBack}>
        <img src="../nav/previous.png" alt="" />
      </div>
      <div>
        <img
          className={`${page >= 0 ? "active" : "passive"}`}
          onClick={() => goTo(0)}
          src="../nav/elipse.png"
          alt=""
        />
      </div>
      <div className={`${page >= 1 && "active"}`} onClick={() => goTo(1)}>
        <img
          className={`${page >= 1 ? "active" : "passive"}`}
          onClick={() => goTo(1)}
          src="../nav/elipse.png"
          alt=""
        />
      </div>
      <div className={`${page >= 2 && "active"}`} onClick={() => goTo(2)}>
        <img
          className={`${page >= 2 ? "active" : "passive"}`}
          onClick={() => goTo(2)}
          src="../nav/elipse.png"
          alt=""
        />
      </div>
      <div className={`${page >= 3 && "active"}`} onClick={() => goTo(3)}>
        <img
          className={`${page >= 3 ? "active" : "passive"}`}
          onClick={() => goTo(3)}
          src="../nav/elipse.png"
          alt=""
        />
      </div>
      <div className={`${page >= 4 && "active"}`} onClick={() => goTo(4)}>
        <img
          className={`${page >= 4 ? "active" : "passive"}`}
          onClick={() => goTo(4)}
          src="../nav/elipse.png"
          alt=""
        />
      </div>
      <div onClick={goNext}>
        <img src="../nav/next.png" alt="" />
      </div>
    </div>
  );
}
