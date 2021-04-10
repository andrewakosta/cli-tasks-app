const Task = require("./Task");

class Tasks {

    constructor() {
        this._list = {}
    }

    createTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    loadTaskFromJSONFile(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        })
    }
    listAllTaskWithStatus() {
        console.log("");
        this.tasksAsArray.forEach((task, index) => {
            const idx = `${index + 1}`.green
            const { desc, doneOn } = task;
            const status = doneOn ? " Done ".bgGreen : " To Do ".bgBlue;
            console.log(idx + ". " + desc + " " + status);
        })
    }
    listTaskByStatus(done = true) {
        let counter = 0;
        this.tasksAsArray.forEach(task => {
            counter++;
            const { desc, doneOn } = task;
            const status = doneOn ? " Done ".bgGreen : " Todo ".bgBlue
            if (done && doneOn) {
                console.log(`${counter.toString().green}. ${desc} ${status}`);
            }
            if (!done && !doneOn) {
                console.log(`${counter.toString().green}. ${desc} ${status}`);
            }

        })
    }
    removeTask(id = ''){
        if(this._list[id]){
            delete this._list[id];
        }
    }
    get tasksAsArray() {
        const list = [];
        Object.keys(this._list).forEach(_task => {
            const task = this._list[_task];
            list.push(task)
        })

        return list;
    }

}

module.exports = Tasks;