//Import path:
const path = require("path");

//*** Route Exports ********************************************************************//
module.exports = app => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}
//**************************************************************************************//