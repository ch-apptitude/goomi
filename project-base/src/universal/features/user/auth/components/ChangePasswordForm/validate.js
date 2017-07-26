const validate = ({ password, repassword, oldPassword }) => {
  const errors = {
    password: undefined,
    repassword: undefined,
    oldPassword: undefined,
  };

  if (!password) {
    errors.password = { name: 'requiredPassword' };
  } else if (password.length < 6) {
    errors.password = { name: 'minCharacters', values: { count: 6 } };
  }

  if (password !== repassword) {
    errors.repassword = { name: 'RepasswordNotEqual' };
  }

  if (!oldPassword) {
    errors.oldPassword = { name: 'requiredPassword' };
  } else if (oldPassword.length < 6) {
    errors.oldPassword = { name: 'minCharacters', values: { count: 6 } };
  }

  return errors;
};

export default validate;
