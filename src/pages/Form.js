import React, { useState } from "react";
import Info from "../components/Info/Info";
import Pagination from "../components/Pagination/Pagination";
import Zero from "../components/form/0/Zero";
import One from "../components/form/1/One";
import Two from "../components/form/2/Two";
import Three from "../components/form/3/Three";
import Submit from "../components/form/Submit/Submit";
import Thanks from "../components/form/Thanks/Thanks";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { redberryInfo } from "../redberryInfo";
import axios from "axios";

export default function Form() {
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  const {
    handleChange,
    handleErrors,
    handleSkills,
    handleNext,
    values,
    validatePages,
    errors,
    touched,
  } = useForm();

  const postValues = async () => {
    // <== ADD
    try {
      const requestBody = {
        ...values,
        token: process.env.REACT_APP_TOKEN,
      };
      const response = await axios.post(
        `https://bootcamp-2022.devtest.ge/api/application`,
        requestBody
      );
      setTimeout(goHome, 3000);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const goNext = () => {
    validatePages(page);
    if (page === 1 && values.skills.length < 1) {
      errors.skills = "Add at least 1 skill";
    }

    if (page === 3 && values.will_organize_devtalk === false) {
      values.devtalk_topic = "I would";
    }
    if (handleNext(page) && validatePages(page) && touched && page < 5) {
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
      <div className={`${page < 4 ? "main flex justify-center" : "hide"} `}>
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
                handleErrors={handleErrors}
                handleSkills={handleSkills}
                handleChange={handleChange}
              />
            )}
          </div>
          <div className={`${page !== 2 && "hide"}`}>
            <Two
              values={values}
              errors={errors}
              handleErrors={handleErrors}
              handleChange={handleChange}
            />
          </div>
          <div className={`${page !== 3 && "hide"}`}>
            <Three
              values={values}
              errors={errors}
              handleErrors={handleErrors}
              handleChange={handleChange}
            />
          </div>
        </div>
        {page < 4 && (
          <>
            <Pagination
              page={page}
              goBack={goBack}
              goTo={goTo}
              goNext={goNext}
            />
            <Info data={redberryInfo[page]} />
          </>
        )}
      </div>
      <div className={`${page !== 4 ? "hide" : "main flex justify-center"} `}>
        <Submit goBack={goBack} submit={postValues} />
      </div>
      <div className={`${page !== 5 ? "hide" : "main flex justify-center"} `}>
        <Thanks />
      </div>
    </div>
  );
}
