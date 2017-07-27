const chalk = require('chalk');
const printPlopChanges = (changes) => console.log(chalk.green('[SUCCESS]'), 'Files copied');
/* changes.forEach(function(line) {
    console.log(chalk.green('[SUCCESS]'), line.type, line.path);
  });*/

const printPlopFailures = (failures, projectName) => {
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

var loading = function() {
  var h = ['|', '/', '-', '\\'];
  var i = 0;

  return setInterval(() => {
    i = i > 3 ? 0 : i;
    process.stdout.clearLine(); // clear current text
    process.stdout.cursorTo(0); // move cursor to beginning of line
    process.stdout.write(h[i]); // move cursor to beginning of line

    i++;
  }, 150);
};

module.exports = {
  printPlopChanges,
  printPlopFailures,
  loading,
};
