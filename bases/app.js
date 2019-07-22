const colors = require('colors');
const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado ${archivo.green}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}