#! /usr/bin/env node

const yargs = require("yargs");
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

console.log(yargs.argv);
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
  console.error("\nno sentence found");
  console.log("Enter tran --help to get started.\n");
  return;
}
async function op() {
  try {
    const { text } = await translate(sentence, { to: lang });
    console.log(`\n\n${text}\n\n`);
  } catch (err) {
    console.error(err);
    return;
  }
}

op();
