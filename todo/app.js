const colors = require('colors');
let { argv } = require('./config/yargs');
let comando = argv._[0];

const { crear, actualizar, borrar, getListado } = require('./todo/todo');

switch (comando) {
    case 'crear':
        let creado = crear(argv.descripcion)
        console.log(creado);
        break;

    case 'listar':
        let listado = getListado();
        for (let tarea of listado) {
            console.log('================Por Hacer==============='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================================'.green);
        }

        break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
}