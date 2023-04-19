const yargs = require("yargs");
const { addNote, removeNote, listNotes, readNote } = require("./note.js");

yargs.command(
  "add",
  "Add a new note",
  {
    title: {
      describe: "Note title",
      require: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      require: true,
      type: "string",
    },
  },
  (argv) => addNote(argv)
);

yargs.command(
  "remove",
  "Remove a note",
  {
    title: {
      type: "string",
      require: true,
      describe: "Type note title for removing",
    },
  },
  (argv) => removeNote(argv)
);

yargs.command("list", "Listing your notes", () => {
  listNotes();
});

yargs.command(
  "read",
  "Reads a single note",
  {
    title: {
      require: true,
      describe: "Type a title if you want to find a specific note",
      type: "string",
    },
  },
  (argv) => readNote(argv)
);

yargs.help().argv;
