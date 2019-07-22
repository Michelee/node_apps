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

let getEmpleado = async id => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe empleado con id ${id}`);
    } else {
        return empleadoDB;
    }
}

const getSalario = async empleado => {
    const { id, nombre } = empleado;
    let salarioDB = salarios.find(salario => salario.id === id);

    if (!salarioDB) {
        throw new Error(`No existe salario para el usuario ${nombre}`);
    } else {
        return {
            'nombre': nombre,
            'salario': salarioDB.salarios
        };
    }
}

const getInfo = async id => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return (`${resp.nombre} tiene un salario de ${resp.salario}`)
}

getInfo(2)
    .then(mens => console.log(mens))
    .catch(error => console.log(error));