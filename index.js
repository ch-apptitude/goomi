#!/usr/bin/env node
const prog = require('caporal');
const nodePlop = require('node-plop');
var out = require('plop/src/console-out');
const { exec } = require('child_process');
const chalk = require('chalk');
const fs = require('fs-extra');
// load an instance of plop from a plopfile
const init = nodePlop(`${__dirname}/plopfile.js`);

// INIT
const initProjectBase = init.getGenerator('init');

const installNpm = (projectName) => {
  console.log('npm install in progress...');
  const npm = exec('npm install', {cwd: `${process.cwd()}/${projectName}`});
  npm.stdout.on('data', (data) => console.log(data.toString()));
};

const printChanges = (changes) =>
  changes.forEach(function(line) {
    console.log(chalk.green('[SUCCESS]'), line.type, line.path);
  });

const printFailures = (failures, projectName) => {
  failures.forEach(function(line) {
    var logs = [chalk.red('[FAILED]')];
    if (line.type) {
      logs.push(line.type);
    }
    if (line.path) {
      logs.push(line.path);
    }

    var error = line.error || line.message;
    logs.push(chalk.red(error));

    console.log.apply(console, logs);
  });
  fs.removeSync(`${process.cwd()}/${projectName}`);
  process.exit(1);
};

const initialize = (args, options) => {
  initProjectBase
    .runActions({ name: args.projectName })
    .then(function(result) {
      if (result.failures.length) {
        printFailures(result.failures, args.projectName);
      } else {
        printChanges(result.changes);
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
	generator.runPrompts().then(generator.runActions)
		.then(function (result) {
			result.changes.forEach(function(line) {
				console.log(chalk.green('[SUCCESS]'), line.type, line.path);
			});
			result.failures.forEach(function (line) {
				var logs = [chalk.red('[FAILED]')];
				if (line.type) { logs.push(line.type); }
				if (line.path) { logs.push(line.path); }

				var error = line.error || line.message;
				logs.push(chalk.red(error));

				console.log.apply(console, logs);
			});
		})
		.catch(function (err) {
			console.error(chalk.red('[ERROR]'), err.message, err.stack);
			process.exit(1);
		});
}

const runGenerator = (args, options) => {
	const generators = goomiGenerators.getGeneratorList();
	if (!args.generatorName) {
		out.chooseOptionFromList(generators).then(function (generatorName) {
			doThePlop(goomiGenerators.getGenerator(generatorName));
		});
	} else if (generators.map(function (v) { return v.name; }).indexOf(args.generatorName) > -1) {
		doThePlop(goomiGenerators.getGenerator(args.generatorName));
	} else {
		console.error(chalk.red('[PLOP] ') + 'Generator "' + generator + '" not found in plopfile');
		process.exit(1);
	}
}

prog.version('1.0.0').command('init').argument('<projectName>', 'Name of the application').action(initialize)
.command('generate').argument('[generatorName]', 'Name of the application', [goomiGenerators.getGeneratorList().concat('')]).action(runGenerator);
prog.parse(process.argv);
