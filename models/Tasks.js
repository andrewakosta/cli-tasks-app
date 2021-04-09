const Task = require("./Task");

class Tasks {

    constructor(){
        this._list = {}
    }

    createTask(desc = ''){
        const task = new Task(desc);
        this._list[task.id] = task;
    } 

    loadTaskFromJSONFile(tasks = [] ){
        tasks.forEach(task => { 
            this._list[task.id] = task;
        })
    }
    listAllTaskWithStatus(){
        console.log("");
        this.tasksAsArray.forEach((task, index)=>{
            const idx = `${index + 1 }`.green
            const {desc, doneOn} = task;
            const status = doneOn ? " Done ".bgGreen:" To Do ".bgBlue;
            console.log(idx+". " + desc +" "+  status);
        })
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