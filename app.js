const note = require("./notes");
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
    note.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title to removed",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    note.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Listing the notes",
  handler: () => {
    note.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Reading note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    note.readNote(argv.title);
  },
});

yargs.parse();
