const getNotes = require("./notes");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing a note");
  },
});

yargs.command({
  command: "list",
  describe: "Listing the notes",
  handler: () => {
    console.log("Listing the notes");
  },
});

yargs.command({
  command: "read",
  describe: "Reading notes",
  handler: () => {
    console.log("Reading notes");
  },
});

yargs.parse();
