const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            {id: 1, nombre: 'Proyecto 1'},
            {id: 2, nombre: 'Proyecto 2'}
        ]
    },
    {
        id: 2,
        nombre: 'Maria',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            {id: 3, nombre: 'Proyecto 3'},
            {id: 4, nombre: 'Proyecto 4'}
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            {id: 5, nombre: 'Proyecto 5'},
            {id: 6, nombre: 'Proyecto 6'}
        ]
    },
]

const Transform = (datos) => {
    let devJS = datos.filter((element) => {
        return element.habilidades.includes('JavaScript')
    })

    let proyectos = []
    // let proyectos = datos.map((element) => {
    //     element.proyectos.map((value) => {
    //         console.log(value.nombre)
    //         return value.nombre
    //     })
    // })
    for (element of datos) {
        proyectos = proyectos.concat(element.proyectos.map(value => value.nombre))        
    }

    return [devJS, proyectos]
}

const [desarrolladoresJavaScript, nombreProyecto] = Transform(datos)

console.log (desarrolladoresJavaScript)
console.log (nombreProyecto)