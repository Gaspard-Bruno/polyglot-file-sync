#!/usr/bin/env node
const chalk  = require('chalk')
const argv = require('yargs').argv

if (argv && argv.config) {
  require = require("esm")(module);
  module.exports = require("../scripts/sync-phrases.js").default(
    argv.config,
    argv.dev,
    argv['dev-server']
  );

} else {
  console.log(chalk.red('Polyglot: No config path provided'))

}
