const inquirer = require('inquirer');
require('colors');


const menuOpt = [
    {
        type: 'list',
        name: 'option',
        message: 'Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.green}. Crear tarea`,
            },
            {
                value: '2',
                name: `${'2'.green}. Listar tareas`,
            },
            {
                value: '3',
                name: `${'3'.green}. Listar tareas completadas`,
            },
            {
                value: '4',
                name: `${'4'.green}. Listar tareas pendientes`,
            },
            {
                value: '5',
                name: `${'5'.green}. Completar tareas`,
            },
            {
                value: '6',
                name: `${'6'.green}. Borrar tarea`,
            },
            {
                value: '0',
                name: `${'0'.green}. Salir`,
            },
        ],
    }
]

exports.inquirerMenu = async () => {
    //console.clear()
    console.log('=======================================  '.green);
    console.log('             Make your choice            '.white)
    console.log('=======================================\n'.green);

    const { option } = await inquirer.prompt(menuOpt);
    return option
}

exports.pausa = async () => {
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} par continuar`
    }];
    await inquirer.prompt(question);
}

exports.readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Please enter a value'
                }
                return true
            }
        }
    ]
    const { desc } = await inquirer.prompt(question);
    return desc;
}

exports.listTaskAsMenu = async (tasks = []) => {
    const choices = tasks.map((task, index) => {
        const idx = `${index + 1}`.green
        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    });
    const questions = [
        { 
            type:'list',
            name:'id',
            message:'Remove task',
            choices
        }
    ]
    const {id} = await inquirer.prompt(questions)
    return id;
}