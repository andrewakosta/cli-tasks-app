require('colors')

const {inquirerMenu, pausa} = require('./helpers/inquirer');
const Task = require('./models/Task');
const Tasks = require('./models/Tasks')
console.clear();

const main = async() => {
  
    let option = '';
    do {
        
        option =  await inquirerMenu();
        console.log('\n'); 
        await pausa();
       
    } while (option !== '0');
}


main() 