module.exports = (last, context, options) => {
  if (last) {
    return context.substring(context.lastIndexOf('/') + 1, context.length);
  } else {
    return context.substring(context.lastIndexOf('universal') + 10, context.length);
  }
};
