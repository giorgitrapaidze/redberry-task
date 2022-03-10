import { useCallback, useState } from "react";
import { validationRules } from "../validation/validationRules";
import { validationHandlers } from "../validation/validationHandlers";
const useForm = () => {
  const pageZero = ["first_name", "last_name", "email"];
  const pageOne = ["skills"];
  const pageTwo = ["work_preference", "had_covid", "vaccinated"];
  const pageTwoTrue = ["had_covid_at", "vaccinated_at"];
  const pageThree = [
    "will_organize_devtalk",
    "devtalk_topic",
    "something_special",
  ];

  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    skills: [{ id: 0, experience: 0 }],
    work_preference: "",
    had_covid: false,
    had_covid_at: "",
    vaccinated: false,
    vaccinated_at: "",
    will_organize_devtalk: "",
    devtalk_topic: "I would...",
    something_special: "I..",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (value && typeof value === "string") {
      if (value === "true") value = true;
      if (value === "false") value = false;
    }
    if (values.will_organize_devtalk === false) {
      values.devtalk_topic = "I would";
    }

    if (values.vaccinated === false) {
      values.vaccinated_at = new Date().toISOString().slice(0, 10);
    }

    if (values.had_covid === false) {
      values.had_covid_at = new Date().toISOString().slice(0, 10);
    }
    setValues({
      ...values,
      [name]: value,
    });

    if (
      Object.values(values).some(
        (value) => value.length > 0 || value === true || value === false
      )
    ) {
      setTouched(true);
    } else {
      setTouched(false);
    }

    let validationRule = validationRules.filter((rule) => {
      return rule.fieldName === name;
    });
    validationRule[0].rules.forEach((rule) => {
      if (!validationHandlers[rule.type](value)) {
        setErrors({ ...errors, [name]: rule.message });
      }
      delete errors[name];
    });
  };

  const handleErrors = useCallback(
    (e) => {
      const { name, value } = e.target;
      let validationRule = validationRules.filter((rule) => {
        return rule.fieldName === name;
      });
      validationRule[0].rules.forEach((rule) => {
        if (!validationHandlers[rule.type](value)) {
          setErrors({ ...errors, [name]: rule.message });
        }
        delete errors[name];
      });

      // setErrors(validate(values));
    },
    [errors]
  );

  const handleSkills = (skills) => {
    setValues({
      ...values,
      skills: skills,
    });
    setTouched(true);
    // setErrors(validate(values));
  };

  const clearTouched = () => {
    setTouched(false);
  };
  const hasKeys = (value) => values[value] !== "";

  const validatePages = (page) => {
    if (page === 0) {
      return pageZero.every(hasKeys);
    } else if (page === 1) {
      return pageOne.every(hasKeys);
    } else if (page === 2) {
      if (values.vaccinated === false) {
        values.vaccinated_at = "";
      }
      if (values.had_covid === false) {
        values.had_covid_at = "";
      }
      if (
        (pageTwo.every(hasKeys) &&
          values.had_covid === false &&
          values.vaccinated === false) ||
        (pageTwo.every(hasKeys) &&
          values.had_covid === true &&
          values.vaccinated === false &&
          values.had_covid_at !== "") ||
        (pageTwo.every(hasKeys) &&
          values.had_covid === false &&
          values.vaccinated === true &&
          values.vaccinated_at !== "") ||
        (pageTwo.every(hasKeys) && pageTwoTrue.every(hasKeys))
      ) {
        return true;
      }
      return false;
    } else if (page === 3) {
      if (
        (values.will_organize_devtalk === false &&
          values.something_special !== "") ||
        pageThree.every(hasKeys)
      ) {
        return true;
      }
      return false;
    }
  };

  const handleNext = (page) => {
    switch (page) {
      case 0:
        if (Object.keys(errors).some((x) => pageZero.includes(x))) {
          return false;
        }
        return true;
      case 1:
        if (Object.keys(errors).some((x) => pageOne.includes(x))) {
          return false;
        }
        return true;
      case 2:
        if (Object.keys(errors).some((x) => pageTwo.includes(x))) {
          return false;
        }
        return true;
      case 3:
        if (Object.keys(errors).some((x) => pageThree.includes(x))) {
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  return {
    handleChange,
    handleErrors,
    handleSkills,
    handleNext,
    values,
    errors,
    validatePages,
    setErrors,
    touched,
    clearTouched,
  };
};

export default useForm;
