const fs = require("fs");

var uniqid = require("uniqid");

module.exports = function (app) {
  app.get("/api/notes", (req, res) => {
    console.log("Request executed 👍!");

    let data = fs.readFileSync("./db/db.json", "utf8");

    res.json(JSON.parse(data));
  });

  app.post("/api/notes", (req, res) => {
    const newNote = {
      ...req.body,
      id: uniqid(),
    };

    console.log("Post request for new notes");

    // here read data from JSON file
    let data = fs.readFileSync("./db/db.json", "utf-8");

    const dataJSON = JSON.parse(data);

    //new notes added db.json
    dataJSON.push(newNote);

    fs.writeFile("./db/db.json", JSON.stringify(dataJSON), (err, text) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Success 🥳!");
    });

    console.log("New note added");

    res.json(data);
  });

  app.delete("/api/notes/:id", (req, res) => {
    let data = fs.readFileSync("./db/db.json", "utf8");

    const dataJSON = JSON.parse(data);

    const newNote = dataJSON.filter((note) => {
      return note.id !== req.params.id;
    });

    fs.writeFile("./db/db.json", JSON.stringify(newNote), (err, text) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    res.json(newNote);
  });
};
