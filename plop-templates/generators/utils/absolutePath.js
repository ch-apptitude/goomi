const path = require('path')

module.exports = (last, context, options) => {
  if (last) {
    return context.substring(context.lastIndexOf(path.sep) + 1, context.length);
  } else {
    const result = context.substring(context.lastIndexOf('universal') + 10, context.length);
    return result.replace(new RegExp('\\\\', 'g'), "/");
  }
};
