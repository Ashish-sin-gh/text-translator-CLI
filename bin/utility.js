const languages = require("./langStore");
const chalk = require("chalk");

const usage = "\nUsage: tran <lang_name> sentence to be translated";

function parseArgument(wordsArray) {
  //as the arguments will be stored in array, u need to parse it into sentence to work on it
  let sentence = "";
  for (let i = 1; i < wordsArray.length; i++) {
    sentence = sentence + wordsArray[i] + " ";
  }
  return sentence;
}

function showHelp() {
  console.log(usage);
  console.log("\nOptions:\r");
  console.log(
    "\t--version\t      " + "Show version number." + "\t\t" + "[boolean]\r"
  );
  console.log(
    "    -l, --languages\t" +
      "      " +
      "List all languages." +
      "\t\t" +
      "[boolean]\r"
  );
  console.log("\t--help\t\t      " + "Show help." + "\t\t\t" + "[boolean]\n");
}

function showAllLang() {
  console.log("language\t\t\tcode");
  for (let [lang, code] of languages) {
    console.log(chalk.yellow(lang.trim() + "\t\t\t" + code.trim()));
  }
}

function getLangCode(language) {
  if (language.length === 2) {
    return language;
  } else if (languages.has(language)) {
    return languages.get(language);
  } else {
    console.error(chalk.magenta("language not supported"));
    console.log(chalk.bgGreen("choose from below language list"));
    showAllLang();
    return;
  }
}

module.exports = { parseArgument, showHelp, showAllLang, getLangCode };
