const fs = require('fs');

exports.saveTasksInJsonFile = data => {
    const filePath = './db/data.json';

    fs.writeFileSync(filePath, data)
}