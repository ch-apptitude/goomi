const fs = require('fs-extra');
const path = require('path');

const copy = function(answers, config, plop) {
  try {
    fs.copySync(config.origin, config.destination);
  } catch (err) {
    throw err;
  }
  // otherwise
  return `Successfully initialized ${path.join(process.cwd(), answers.name)}`;
};

const initialize = {
  actions: (data) => {
    console.log('Initialisation in progess...');
    const actions = [
      {
        type: 'addMany',
        destination: path.join(process.cwd(), data.name),
        base: 'project-base',
        templateFiles: path.join('project-base', '{.,}**', '{.,}*'),
      },
      {
        type: 'copy',
        origin:  path.join(__dirname, 'assets'),
        destination: path.join(process.cwd(), data.name, 'src', 'universal', 'assets'),
      },
      {
        type: 'copy',
        origin: path.join(__dirname, 'config', '.vscode'),
        destination: path.join(process.cwd(), data.name, '.vscode'),
      },
    ];

    if (data.all) {
      actions.push({
        type: 'copy',
        origin: path.join(__dirname, 'setup'),
        destination: path.join(process.cwd(), data.name),
      });
    }
    return actions;
  },
};

module.exports = (plop) => {
  plop.setActionType('copy', copy);
  plop.setGenerator('init', initialize);
};
