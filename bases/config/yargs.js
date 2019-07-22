const opc = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Lista tablas de multiplicar', opc)
    .command('crear', 'Crear tablas de multiplicar', opc)
    .help()
    .argv;

module.exports = {
    argv
}