import { useCallback, useEffect, useState } from "react";
import { validationRules } from "../validationRules";
import { validationHandlers } from "../validationHandlers";
const useForm = () => {
  const pageZero = ["first_name", "last_name", "email", "phone"];
  const pageOne = ["skills"];
  const pageTwo = [
    "work_preference",
    "had_covid",
    "had_covid_at",
    "vaccinated",
    "vaccinated_at",
  ];
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
    had_covid: "",
    had_covid_at: "",
    vaccinated: "",
    vaccinated_at: "",
    will_organize_devtalk: "",
    devtalk_topic: "",
    something_special: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (value && typeof value === "string") {
      if (value === "true") value = true;
      if (value === "false") value = false;
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
    setErrors,
    touched,
  };
};

export default useForm;
