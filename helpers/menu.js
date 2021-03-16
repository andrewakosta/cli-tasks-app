const { resolve } = require('path');
const { stdout } = require('process');

require('colors')

const showMenu = () => {

    return new Promise(resolve => {
        console.clear()

        console.log('=======================================  '.green);
        console.log('             Make your choice            '.green)
        console.log('=======================================\n'.green);

        console.log(`${'1.'.green} Create task`);
        console.log(`${'2.'.green} List task`);
        console.log(`${'3.'.green} List task finished`);
        console.log(`${'4.'.green} List task to do`);
        console.log(`${'5.'.green} Complete task`);
        console.log(`${'6.'.green} Remove task`);
        console.log(`${'0.'.green} Exit`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        readline.question('Choose a opcion: ', (option) => {
            readline.close();
            resolve(option)
        });
    })

}

const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: stdout
        });

        readline.question(`\nPress ${'ENTER'.green} to continue`, option => {
            readline.close()
            resolve();
        })
    })
}

module.exports = {
    showMenu,
    pausa
}