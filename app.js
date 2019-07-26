const fs = require("fs");
// const chalk = require("chalk");
// const notes = require("./notes");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new Note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Going to gym is an important task",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    console.log("Adding a new note: " + argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a Note",
  handler: () => {
    console.log("Removing a  note");
  }
});

yargs.command({
  command: "list",
  describe: "List all the Notes",
  handler: () => {
    console.log("Listing all the notes");
  }
});

yargs.command({
  command: "read",
  describe: "Read all the Notes",
  handler: () => {
    console.log("Reading all the notes");
  }
});

yargs.parse();
