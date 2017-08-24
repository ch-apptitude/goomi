const colors = {
  white: '#FFF',
  black_light: '#222831',
  grey_dark: '#393E46',
  orange: '#F96D00',
  white_dark: '#F2F2F2',
  orange_dark: '#FF5216',
  red: '#ED6262',
  green: '#4fcc82',
};

export default {
  primary: colors.black_light,
  secondary: colors.orange,
  error: colors.red,
  success: colors.green,
  ...colors,
};
