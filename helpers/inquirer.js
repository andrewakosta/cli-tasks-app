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
                name: `${'1'.green}.green. Crear tarea`,
            },
            {
                value: '2',
                name: `${'2'.green}.green. Listar tareas`,
            },
            {
                value: '3',
                name: `${'3'.green}.green. Listar tareas completadas`,
            },
            {
                value: '4',
                name: `${'4'.green}.green. Listar tareas pendientes`,
            },
            {
                value: '5',
                name: `${'5'.green}.green. Completar tareas`,
            },
            {
                value: '6',
                name: `${'6'.green}.green. Borrar tarea`,
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