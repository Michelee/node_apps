const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite = 10) => {
    console.log('================================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('================================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`Result: ${base * i}`);
    }
}

const crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base no es un numero'.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `Result: ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}