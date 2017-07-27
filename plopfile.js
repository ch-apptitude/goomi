const fs = require('fs-extra');

const copy = function(answers, config, plop) {
  try {
    fs.copySync(config.origin, config.destination);
  } catch (err) {
    throw err;
  }
  // otherwise
  return `Successfully initialized ${process.cwd()}/${answers.name}`;
};

const initialize = {
  actions: (data) => {
    console.log('Initialisation in progess...');
    const actions = [
      {
        type: 'addMany',
        destination: `${process.cwd()}/${data.name}`,
        templateFiles: 'project-base/{.,}**/{.,}*',
      },
      {
        type: 'copy',
        origin: `${__dirname}/assets`,
        destination: `${process.cwd()}/${data.name}/src/universal/assets`,
      },
      {
        type: 'copy',
        origin: `${__dirname}/config/.vscode`,
        destination: `${process.cwd()}/${data.name}/.vscode`,
      },
    ];

    if (data.all) {
      actions.push({
        type: 'copy',
        origin: `${__dirname}/setup`,
        destination: `${process.cwd()}/${data.name}`,
      });
    }
    return actions;
  },
};

module.exports = (plop) => {
  plop.setActionType('copy', copy);
  plop.setGenerator('init', initialize);
};
