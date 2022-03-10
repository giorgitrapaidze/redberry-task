const validateRequired = (value) => {
  if (value.length > 0) {
    return true;
  }
  return false;
};

const validateEmail = (email) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)) {
    return true;
  }
  return false;
};

const validatePhone = (phone) => {
  const validRegex = /[+]9955/g;
  if (phone.match(validRegex)) {
    return true;
  }
  return false;
};

const validateRadio = (value) => {
  if (value !== "") {
    return true;
  }
  return false;
};

export const validationHandlers = {
  required: validateRequired,
  email: validateEmail,
  phone: validatePhone,
  radio: validateRadio,
};
