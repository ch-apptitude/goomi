/**
 * Language Generator
 */
const exec = require('child_process').exec;

module.exports = {
  description: 'Add a language',
  prompts: [
    {
      type: 'input',
      name: 'language',
      message: 'What is the language you want to add i18n support for (e.g. "fr", "de")?',
      default: 'fr',
      validate: (value) => {
        if (/.+/.test(value) && value.length === 2) {
          return true;
        }

        return '2 character language specifier is required';
      },
    },
  ],

  actions: () => {
    const actions = [
      {
        type: 'add',
        path: `${process.cwd()}/src/universal/features/language/translations/{{language}}.json`,
        templateFile: './language/translations-json.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${process.cwd()}/src/client/clientLoader.js`,
        pattern: /(\/\/ POLYFILLS FOR GENERATOR)/g,
        template: "'intl/locale-data/jsonp/{{language}}.js',\n      $1",
        abortOnFail: true,
        
      },
      {
        type: 'modify',
        path: `${process.cwd()}/src/client/clientLoader.js`,
        pattern: /(\/\/ REQUIRE FOR GENERATOR)/g,
        template: "require('intl/locale-data/jsonp/{{language}}.js');\n      $1",
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${process.cwd()}/src/universal/features/language/i18n.js`,
        pattern: /(\/\/ IMPORT FOR GENERATOR)/g,
        templateFile: './language/intl-locale-data.hbs',
      },
      {
        type: 'modify',
        path: `${process.cwd()}/src/universal/features/language/i18n.js`,
        pattern: /(\/\/ FOREACH FOR GENERATOR)/g,
        templateFile: './language/app-locale.hbs',
      },
      {
        type: 'modify',
        path: `${process.cwd()}/src/universal/features/language/i18n.js`,
        pattern: /(\/\/ MESSAGES FOR GENERATOR)/g,
        template: "{{language}}: formatTranslationMessages({{language}}TranslationMessages),\n  $1",
      },
      {
        type: 'modify',
        path: `${process.cwd()}/src/universal/appConfig.js`,
        pattern: /(\/\/ LOCAL FOR GENERATOR)/g,
        template: "'{{language}}',\n      $1",
      },
    ];
    console.log(`${process.cwd()}/src/client/clientLoader.js`)
    actions.push(() => {
      const cmd = 'npm run extract-intl';
      exec(cmd, (err, result, stderr) => {
        if (err || stderr) {
          throw err || stderr;
        }
        process.stdout.write(result);
      });
    });

    return actions;
  },
};
