const validateRequired = (value) => {
  if (value.length > 0) {
    return true;
  }
  return false;
};

const validateObjectRequired = (value) => {
  if (Object.keys(value).length > 0) {
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
  if (phone.match(validRegex) && phone.length === 13) {
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
  objectRequired: validateObjectRequired,
};
