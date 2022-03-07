import React, { useState } from "react";
import Info from "../components/Info";
import Pagination from "../components/Pagination";
import Zero from "../components/form/Zero";
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
    setPage(number);
  };

  return (
    <div>
      <div className="main flex justify-center">
        {" "}
        <div className="left">
          {page === 0 && <Zero />}
          {page === 1 && <>hello</>}
          <Pagination page={page} goBack={goBack} goTo={goTo} goNext={goNext} />
        </div>
        <Info data={redberryInfo[page]} />
      </div>
    </div>
  );
}
