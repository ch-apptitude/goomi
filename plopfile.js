const fs = require('fs-extra');
module.exports = (plop) => {
  plop.setActionType('copyBaseAssets', function(answers, config, plop) {
    try {
      fs.copySync(`${__dirname}/assets`, `${process.cwd()}/${answers.name}/src/universal/assets`);
      fs.copySync(`${__dirname}/config/.vscode`, `${process.cwd()}/${answers.name}/.vscode`);
    } catch (err) {
      throw err;
    }
    // otherwise
    return `Successfully initialized ${process.cwd()}/${answers.name}`;
  });
  plop.setGenerator('init', initialize);
};

const initialize = {
  actions: (data) => {
    console.log('Initialisation in progess...');
    return [
      {
        type: 'addMany',
        destination: `${process.cwd()}/${data.name}`,
        templateFiles: 'project-base/{.,}**/{.,}*',
      },
      {
        type: 'copyBaseAssets',
      },
    ];
  },
};
