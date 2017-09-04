/** 
 * Route Generator
 */
const fs = require('fs');
const routeExists = require('../utils/routeExists');

module.exports = {
  description: 'Add a route',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What name for the page?',
      default: 'AboutPage',
      validate: (value) => {
        if (/.+/.test(value)) {
          return !routeExists(value) || `"${value}" doesn't exist.`;
        }

        return 'The path is required';
      },
    },
    {
      type: 'input',
      name: 'path',
      message: 'Enter the path of the route.',
      default: '/about',
      validate: (value) => {
        if (/.+/.test(value)) {
          return true;
        }

        return 'path is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantCSS',
      default: true,
      message: 'Does it have styling?',
    },
  ],

  // Add the route to the routes.js file above the error route
  // TODO smarter route adding
  actions: (data) => {
    const actions = [];

    actions.push({
      type: 'add',
      path: process.cwd() + '/src/universal/features/routing/pages/{{properCase name}}/index.js',
      templateFile: './route/index.js.hbs',
    });

    actions.push({
      type: 'modify',
      path: process.cwd() + '/src/universal/features/routing/routes.js',
      pattern: /(\/\*\s*apptitude\s*IMPORT.*\*\/)/g,
      template: `import {{properCase name}} from \'features/routing/pages/{{ properCase name }}\';\n$1`,
    });

    actions.push({
      type: 'modify',
      path: process.cwd() + '/src/universal/features/routing/routes.js',
      pattern: /(\/\*\s*apptitude\s*ROUTE.*\*\/)/g,
      template: `{
            path: '{{ path }}',
            component: {{ properCase name }},
        },
        $1`,
    });

    actions.push({
      type: 'add',
      path: process.cwd() + '/src/universal/features/routing/pages/{{properCase name}}/messages.js',
      templateFile: './route/messages.js.hbs',
    });

    return actions;
  },
};
