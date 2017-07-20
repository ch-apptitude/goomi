const validate = ({ email }) => {
  const errors = {
    email: undefined,
  };

  if (!email) {
    errors.email = { name: 'requiredEmail' };
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = { name: 'invalidEmail' };
  }

  return errors;
};

export default validate;
