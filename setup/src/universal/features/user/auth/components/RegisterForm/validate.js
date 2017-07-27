const validate = ({ lastName, firstName, email, pwd, repwd, cgv }) => {
  const errors = {
    lastName: undefined,
    firstName: undefined,
    email: undefined,
    pwd: undefined,
    repassword: undefined,
    cgv: undefined,
  };

  if (!email) {
    errors.email = { name: 'requiredEmail' };
  } else if (!/^[a-z0-9._-]+@[a-z0-9.-]{2,}[.][a-z]{2,3}$/i.test(email)) {
    errors.email = { name: 'invalidEmail' };
  }

  if (!lastName) {
    errors.lastName = { name: 'requiredLastName' };
  }

  if (!firstName) {
    errors.firstName = { name: 'requiredFirstName' };
  }

  if (!pwd) {
    errors.pwd = { name: 'requiredPassword' };
  } else if (pwd.length < 6) {
    errors.pwd = { name: 'minCharacters', values: { count: 6 } };
  }

  if (pwd !== repwd) {
    errors.repwd = { name: 'RepasswordNotEqual' };
  }

  if (!cgv) {
    errors.cgv = { name: 'requiredCgv' };
  }

  return errors;
};

export default validate;
