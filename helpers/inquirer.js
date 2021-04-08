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
                name: '1. Crear tarea',
            },
            {
                value: '2',
                name: '2. Listar tareas',
            },
            {
                value: '3',
                name: '3. Listar tareas completadas',
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes',
            },
            {
                value: '5',
                name: '5. Completar tareas',
            },
            {
                value: '6',
                name: '6. Borrar tarea',
            },
            {
                value: '0',
                name: '0. Salir',
            },
        ],
    }
]

exports.inquirerMenu = async () => {
    //console.clear()
    console.log('=======================================  '.green);
    console.log('             Make your choice            '.green)
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
            validate(value){
                if(value.length === 0){
                    return 'Please enter a value'
                }
                return true
            } 
        }
    ]
    const {desc} =  await inquirer.prompt(question);
    return desc;
}