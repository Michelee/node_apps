// setTimeout(() => {
//     console.log('Hola mundo');
// }, 1000);

const getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Michele',
        id
    }

    if (id === 20) {
        callback(`Èl usuario con id ${id} , no existe en la BD `)
    } else {
        callback(usuario);
    }
}

getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos: ', usuario);
});