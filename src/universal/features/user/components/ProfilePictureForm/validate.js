const validate = ({ picture }) => {
  const errors = {
    picture: undefined,
  };

  if (!picture) {
    errors.picture = { name: 'requiredPicture' };
  }
  return errors;
};

export default validate;
