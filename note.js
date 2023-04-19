const fs = require("fs");

const loadNotes = () => {
  try {
    const notes = fs.readFileSync("notes-json.json").toString();
    return JSON.parse(notes);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const addNote = ({ title, body }) => {
  const notes = loadNotes();
  const isDublicated = notes.find((item) => item.title === title);

  if (!isDublicated) {
    notes.push({ title, body });
    fs.writeFileSync("notes-json.json", JSON.stringify(notes));
  } else {
    console.log("This title is already taken");
  }
};

const removeNote = ({ title }) => {
  const notes = loadNotes();
  const isAlreadyExists = notes.some((item) => item.title === title);

  if (isAlreadyExists) {
    const filteredArray = notes.filter((item) => item.title !== title);
    fs.writeFileSync("notes-json.json", JSON.stringify(filteredArray));
  } else {
    console.log("There is no note with such title");
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log("Your notes:");
  notes.forEach((item, i) => {
    console.log(`Note #${i} ${item.title}`);
  });
};

const readNote = ({ title }) => {
  const notes = loadNotes();
  const singleNote = notes.find((item) => item.title === title);

  if (singleNote) {
    console.log(`Note title: ${singleNote.title}`);
    console.log(`Note description: ${singleNote.body}`);
  } else {
    console.log("Error! There is no note with such title");
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
