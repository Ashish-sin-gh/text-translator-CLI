#! /usr/bin/env node

const yargs = require("yargs");
const utils = require("./utility");

const argumentFormate =
  "\nwrite: tran <translation_language> <text_to_translate>";

const options = yargs
  .usage(argumentFormate) //display when user type --help
  .option("l", {
    alias: "languages",
    describe: "list all languages",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

console.log(yargs.argv);
/*
All the arguments that you pass with the command gets stored under the listyargs.argv._ unless the argument begin with a — or a -- in that case, it is treated as a flag with a default value of boolean.
*/

const sentence = utils.parseArgument(yargs.argv._);
console.log(sentence);

//if no arguments passed - show help
if (yargs.argv._[0] === null) {
  utils.showHelp();
  return;
}

//show all suported language
console.log(yargs.argv.l);
if (yargs.argv.l === true || yargs.argv.languages === true) {
  utils.showAllLang();
  return;
}
