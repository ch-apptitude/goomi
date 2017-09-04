#!/usr/bin/env node
const prog = require('caporal');
const nodePlop = require('node-plop');
var plopOout = require('plop/src/console-out');
const { exec } = require('child_process');
const chalk = require('chalk');
const fs = require('fs-extra');
const extractMessages = require('./tools/extractMessages');
const goomiOut = require('./out');

const installNpm = (projectName) => {
  console.log('npm install in progress (can take few minutes)');
  const loading = goomiOut.loading();
  const npm = exec('npm install', { cwd: `${process.cwd()}/${projectName}` });

  npm.stdout.on('data', (data) => {
    clearInterval(loading);
    console.log(data.toString());
  });
};

const initialize = (args, options) => {
  // load an instance of plop from a plopfile
  const init = nodePlop(`${__dirname}/plopfile.js`);
  // INIT
  const initProjectBase = init.getGenerator('init');
  initProjectBase
    .runActions({ name: args.projectName, all: options.all })
    .then(function(result) {
      if (result.failures.length) {
        goomiOut.printPlopFailures(result.failures, args.projectName);
      } else {
        goomiOut.printPlopChanges(result.changes);
        installNpm(args.projectName);
      }
    })
    .catch(function(err) {
      console.error(chalk.red('[ERROR]'), err.message, err.stack);
      process.exit(1);
    });
};

// GENERATORS
const goomiGenerators = nodePlop(`${__dirname}/plop-templates/generators/index.js`);

/////
// everybody to the plop!
//
function doThePlop(generator) {
  generator
    .runPrompts()
    .then(generator.runActions)
    .then(function(result) {
      goomiOut.printPlopChanges(result.change);
      goomiOut.printPlopFailures(result.failures);
    })
    .catch(function(err) {
      console.error(chalk.red('[ERROR]'), err.message, err.stack);
      process.exit(1);
    });
}

const runGenerator = (args, options) => {
  const generators = goomiGenerators.getGeneratorList();
  if (!args.generatorName) {
    plopOout.chooseOptionFromList(generators).then(function(generatorName) {
      doThePlop(goomiGenerators.getGenerator(generatorName));
    });
  } else if (
    generators
      .map(function(v) {
        return v.name;
      })
      .indexOf(args.generatorName) > -1
  ) {
    doThePlop(goomiGenerators.getGenerator(args.generatorName));
  } else {
    console.error(chalk.red('[PLOP] ') + 'Generator "' + generator + '" not found in plopfile');
    process.exit(1);
  }
};

prog
  .version('1.0.0')
  .command('init')
  .argument('<projectName>', 'Name of the application')
  .option('-a, --all', 'Install user feature, react-form components, and some basic UI components')
  .action(initialize)
  .command('generate')
  .argument('[generatorName]', 'Name of the application')
  .action(runGenerator)
  .command('extract-intl')
  .action(extractMessages);

prog.parse(process.argv);
