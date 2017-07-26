//

export const formatInputUser = (user) =>
  Object.assign(user, {
    birthdate: user.birthdate ? new Date(user.birthdate) : undefined,
  });

export const formatOutputUser = (user) => {
  const result = { ...user };
  if (user.birthdate instanceof Date) {
    result.birthdate = result.birthdate.toISOString();
  } else if (typeof user.birthdate !== 'string') {
    console.error('invalid format for user birthdate'); // eslint-disable-line no-console
    return null;
  }
  return result;
};
