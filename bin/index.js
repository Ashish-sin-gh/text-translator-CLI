#! /usr/bin/env node

const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");

const utils = require("./utility");
const { translate } = require("@vitalets/google-translate-api");

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

// console.log(yargs.argv);
/*
All the arguments that you pass with the command gets stored under the listyargs.argv._ unless the argument begin with a — or a -- in that case, it is treated as a flag with a default value of boolean.
*/

const sentence = utils.parseArgument(yargs.argv._);
// console.log(sentence);

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

//program logic
let lang = "";

if (yargs.argv._[0]) {
  lang = yargs.argv._[0].toLowerCase();
}

lang = utils.getLangCode(lang);

if (sentence === "") {
  console.error(chalk.red("\nno sentence found"));
  console.log(chalk.green("Enter tran --help to get started.\n"));
  return;
}
async function op() {
  try {
    const { text } = await translate(sentence, { to: lang });
    // console.log(chalk.green(`\n\n${text}\n\n`));
    console.log(
      boxen(chalk.yellowBright(`${text}`), {
        padding: 1,
        margin: 1,
        borderStyle: "double",
      })
    );
  } catch (err) {
    console.error(chalk.red(err));
    return;
  }
}

op();
