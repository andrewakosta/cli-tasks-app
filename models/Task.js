const {v4: uuid} = require('uuid');

class Task {



    constructor(desc){
        this.id = uuid();
        this.desc =  desc;
        this.doneOn = null;
    }
}

module.exports = Task;