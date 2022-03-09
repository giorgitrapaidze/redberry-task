import React, { useState } from "react";
import Info from "../components/Info";
import Pagination from "../components/Pagination";
import Zero from "../components/form/Zero";
import One from "../components/form/One";
import Two from "../components/form/Two";
import Three from "../components/form/Three";
import Submit from "../components/form/Submit";
import Thanks from "../components/form/Thanks";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { redberryInfo } from "../redberryInfo";
import axios from "axios";

export default function Form() {
  const [page, setPage] = useState(4);

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
    errors,
    touched,
  } = useForm();

  const postValues = async () => {
    // <== ADD
    try {
      const requestBody = {
        ...values,
        token: "d56d1d30-9503-4005-97f3-bd957ce8ec49",
      };
      console.log(requestBody);
      setPage(page + 1);
      setTimeout(goHome, 3000);

      //   const response = await axios.post(
      //     `https://bootcamp-2022.devtest.ge/api/application`,
      //     requestBody
      //   );
    } catch (error) {
      console.log(error);
    }
  };

  const goNext = () => {
    if (page === 1 && values.skills.length < 1) {
      errors.skills = "Add at least 1 skill";
    } else {
      if (handleNext(page) && touched && page < 5) {
        setPage(page + 1);
      }
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
                handleSkills={handleSkills}
                handleChange={handleChange}
              />
            )}
          </div>
          <div className={`${page !== 2 && "hide"}`}>
            <Two
              values={values}
              errors={errors}
              handleSkills={handleSkills}
              handleChange={handleChange}
            />
          </div>
          <div className={`${page !== 3 && "hide"}`}>
            <Three
              values={values}
              errors={errors}
              handleSkills={handleSkills}
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
