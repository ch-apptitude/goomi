const validate = ({ birthdate }) => {
  const errors = {
    birthdate: undefined,
  };

  if (!birthdate) {
    errors.birthdate = { name: 'requiredBirthDate' };
  }
  return errors;
};

export default validate;
