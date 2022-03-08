import React, { useState } from "react";
import Info from "../components/Info";
import Pagination from "../components/Pagination";
import Zero from "../components/form/Zero";
import One from "../components/form/One";
import Two from "../components/form/Two";
import useForm from "../hooks/useForm";
import { redberryInfo } from "../redberryInfo";

export default function Form() {
  const [page, setPage] = useState(0);

  const {
    handleChange,
    handleErrors,
    handleSkills,
    handleNext,
    values,
    errors,
    touched,
  } = useForm();

  const goNext = () => {
    if (handleNext(page) && touched && page < 4) {
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
            {page === 0 && (
              <Zero
                handleChange={handleChange}
                handleErrors={handleErrors}
                values={values}
                errors={errors}
              />
            )}
          </div>
          <div className={`${page !== 1 && "hide"}`}>
            {page === 1 && (
              <One
                values={values}
                errors={errors}
                handleSkills={handleSkills}
                handleChange={handleChange}
              />
            )}
          </div>
          <div className={`${page !== 2 && "hide"}`}>
            <Two />
          </div>
        </div>
        <Pagination page={page} goBack={goBack} goTo={goTo} goNext={goNext} />
        <Info data={redberryInfo[page]} />
      </div>
    </div>
  );
}
