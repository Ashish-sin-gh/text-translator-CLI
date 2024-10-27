# How to make a CLI project using NodeJS?

Initialise npm - `npm init -y`

### STEPS

1. create folder `bin` on root directory

2. inside bin create `index.js` file

3. open the `package.json` file and change the `“main”` part to `bin/index.js`.

4. Now manually add another entry into the package.json file called bin and set it’s key to tran and it’ s value to `./bin/index.js`.

```
"bin": {
 "tran": "./bin/index.js"
 }
```

the key, `tran` is the keyword for calling the CLI.

5. Open the `index.js` file in the bin folder. And put the following code in it:

```
#! /usr/bin/env node
```

A shebang line is used to specify the absolute path to the interpreter that will run the below code.

6. Navigate to the root directory of the project and then run `~$npm install -g`.
   The `-g` flag tells npm to install the package globally on the system.

7. Test the CLI by typing the specified keyword in the terminal.
   `~$tran`

## Handling CommandLine argument
