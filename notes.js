const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.green.inverse(`Title: ${note.title}`));
    console.log(`Body: ${note.body}`);
  } else {
    console.log(chalk.red.inverse("No note found!!"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  debugger;
  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Added!!"));
  } else {
    console.log(chalk.red.inverse("Duplicate title found!!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);
  if (notes.length > newNotes.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(newNotes);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your Notes:"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync("notes.json");
    const dataJSON = bufferData.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = { readNote, addNote, removeNote, listNotes };
