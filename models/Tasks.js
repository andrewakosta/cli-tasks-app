const Task = require("./Task");

class Tasks {

    constructor(){
        this._list = {}
    }

    createTask(desc = ''){
        const task = new Task(desc);
        this._list[task.id] = task;
    } 

    get tasksAsArray(){
        const list = [];
        Object.keys(this._list).forEach(_task =>{
            const task = this._list[_task];
            list.push(task)
        })

        return list;
    }
}

module.exports = Tasks;