const path = require("path");

module.export = function (app) {
  app.get("/note", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

  app.get("/note", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
};
