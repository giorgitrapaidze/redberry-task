import React, { useState } from "react";
import Info from "../components/Info";
import Pagination from "../components/Pagination";
import Zero from "../components/form/Zero";
import One from "../components/form/One";
import Two from "../components/form/Two";
import { redberryInfo } from "../redberryInfo";

export default function Form() {
  const [page, setPage] = useState(0);

  const goNext = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  };

  const goBack = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const goTo = (number) => {
    if (number < page) {
      setPage(number);
    }
  };

  return (
    <div>
      <div className="main flex justify-center">
        {" "}
        <div className="left">
          <div className={`${page !== 0 && "hide"}`}>
            <Zero />
          </div>
          <div className={`${page !== 1 && "hide"}`}>
            <One />
          </div>
          <div className={`${page !== 2 && "hide"}`}>
            <Two />
          </div>

          <Pagination page={page} goBack={goBack} goTo={goTo} goNext={goNext} />
        </div>
        <Info data={redberryInfo[page]} />
      </div>
    </div>
  );
}
