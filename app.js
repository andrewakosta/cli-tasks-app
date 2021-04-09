require('colors')

const { inquirerMenu, pausa, readInput } = require('./helpers/inquirer');
const Task = require('./models/Task');
const Tasks = require('./models/Tasks')
console.clear();

const main = async () => {

    let option = '';
    const tasks = new Tasks()
    do {

        option = await inquirerMenu();
        switch (option) {
            case '1':
                    const desc = await readInput('Description: ')
                    tasks.createTask(desc)
                break;
            case '2':
                    console.log(tasks.tasksAsArray[0].desc);
                break;
            default:
                break;
        }
        //console.log('\n'); 
        await pausa();

    } while (option !== '0');
}


main()