const validate = ({ password, repassword }) => {
  const errors = {
    password: undefined,
    repassword: undefined,
  };

  if (!password) {
    errors.password = { name: 'requiredPassword' };
  } else if (password.length < 6) {
    errors.password = { name: 'minCharacters', values: { count: 6 } };
  }

  if (password !== repassword) {
    errors.repassword = { name: 'RepasswordNotEqual' };
  }

  return errors;
};

export default validate;
