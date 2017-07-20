const validate = ({ email, password }) => {
  const errors = {
    email: undefined,
    password: undefined,
  };
  if (!email) {
    errors.email = { name: 'requiredEmail' };
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = { name: 'invalidEmail' };
  }
  if (!password) {
    errors.password = { name: 'requiredPassword' };
  } else if (password.length < 6) {
    errors.password = { name: 'minCharacters', values: { count: 6 } };
  }
  return errors;
};

export default validate;
