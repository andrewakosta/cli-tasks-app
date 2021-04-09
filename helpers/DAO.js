const fs = require('fs');

const filePath = './db/data.json';

exports.saveTasksInJsonFile = data => {

    fs.writeFileSync(filePath, data)
}

exports.readDB = () => {
    if(!fs.existsSync(filePath)){
        return null
    }
    const data = fs.readFileSync(filePath, {encoding:'utf-8'})
    return JSON.parse(data);
}