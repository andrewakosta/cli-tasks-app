require('colors')

const {showMenu, pausa} = require('./helpers/menu')
console.clear();

const main = async() => {
  
    let option = '';
    do {

        opt =  await showMenu();
        await pausa();
    } while (opt !== '0');
}


main()