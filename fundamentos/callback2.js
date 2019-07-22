let empleados = [{
        id: 1,
        nombre: 'Michele'
    },
    {
        id: 2,
        nombre: 'Andreina'
    },
    {
        id: 3,
        nombre: 'Ancheta'
    },
];

let salarios = [{
        id: 1,
        salarios: 1000
    },
    {
        id: 2,
        salarios: 2000
    }
];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe empleado con id ${id}`);
    } else {
        callback(null, empleadoDB)
    }
}

const getSalario = (empleado, callback) => {
    const { id, nombre } = empleado;
    let salarioDB = salarios.find(salario => salario.id === id);

    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario ${nombre}`);
    } else {
        callback(null, {
            'nombre': nombre,
            'salario': salarioDB.salarios
        })
    }
}


getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, salario) => {
        if (err) {
            return console.log(err);
        }

        console.log(salario);
    });
});