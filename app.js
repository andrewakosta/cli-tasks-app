require('colors')

const { inquirerMenu, pausa, readInput, listTaskAsMenu, confirm, showTasksAsCheckbox } = require('./helpers/inquirer');
const { saveTasksInJsonFile, readDB } = require('./helpers/DAO');
const Task = require('./models/Task');
const Tasks = require('./models/Tasks')
console.clear();

const main = async () => {

    let option = '';
    const tasks = new Tasks();
    const tasksFromDB = readDB();
    if (tasksFromDB) {
        tasks.loadTaskFromJSONFile(tasksFromDB);
    }
    do {

        option = await inquirerMenu();
        switch (option) {
            case '1':
                const desc = await readInput('Description: ')
                tasks.createTask(desc)
                break;
            case '2':
                tasks.listAllTaskWithStatus()
                break;
            case '3':
                tasks.listTaskByStatus(true)
                break;
            case '4':
                tasks.listTaskByStatus(false)
                break;
            case '5':
                const ids = await showTasksAsCheckbox(tasks.tasksAsArray);
                tasks.markAsDoneArrayOfTask(ids)
                break;    
            case '6':
                const id = await listTaskAsMenu(tasks.tasksAsArray);
                if (id !== '0') {
                    const ok = await confirm('Are you sure you want to remove this task?');
                    if (ok) {
                        tasks.removeTask(id);
                        console.log(`  ✔ `.green + 'Task removed successfuly...');
                    }
                    break;
                }
            default:
                break;
        }

        saveTasksInJsonFile(JSON.stringify(tasks.tasksAsArray))
        //console.log('\n'); 
        await pausa();
        console.clear()

    } while (option !== '0');
}


main()