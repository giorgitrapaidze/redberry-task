import { useCallback, useEffect, useState } from "react";
import { validationRules } from "../validationRules";
import { validationHandlers } from "../validationHandlers";
const useForm = () => {
  const zero = ["first_name", "last_name", "email", "phone"];
  const one = ["skills"];
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    skills: [{ id: 0, experience: 0 }],
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (Object.values(values).every((value) => value.length > 0)) {
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
        console.log(name);
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
        if (Object.keys(errors).some((x) => zero.includes(x)) && !touched) {
          return false;
        }
        return true;
      case 1:
        if (values.skills.length < 1) {
          setErrors({ ...errors, skills: "Add at least 1 skill" });
          return false;
        }
        if (Object.keys(errors).some((x) => one.includes(x)) && !touched) {
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
    touched,
  };
};

export default useForm;
