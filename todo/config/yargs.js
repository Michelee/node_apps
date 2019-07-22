const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    demand: true,
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear task', { descripcion })
    .command('actualizar', 'Actualizar task', { descripcion, completado })
    .command('borrar', 'Borrar task', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}