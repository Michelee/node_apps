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

let getEmpleado = id => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe empleado con id ${id}`);
        } else {
            resolve(empleadoDB)
        }
    });
}

const getSalario = empleado => {
    return new Promise((resolve, reject) => {
        const { id, nombre } = empleado;
        let salarioDB = salarios.find(salario => salario.id === id);

        if (!salarioDB) {
            reject(`No existe salario para el usuario ${nombre}`);
        } else {
            resolve({
                'nombre': nombre,
                'salario': salarioDB.salarios
            });
        }
    });
}

getEmpleado(3).then(empleado => {
    getSalario(empleado).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}).catch(error => {
    console.log(error);
})