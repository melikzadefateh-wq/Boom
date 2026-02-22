const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/gameData.json");

let gameData = JSON.parse(fs.readFileSync(dataPath));

function save() {
    fs.writeFileSync(dataPath, JSON.stringify(gameData, null, 2));
    }

    function getData() {
        return gameData;
        }

        function updateData(newData) {
            gameData = newData;
                save();
                }

                module.exports = { getData, updateData };