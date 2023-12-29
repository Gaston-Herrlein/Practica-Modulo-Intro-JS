/* Etructura del objeto cancion
    const cancion = {
        nombre: String
        genero: String
        duracion: int
    }
*/

// ------------------------ LISTA DE CANCIONES PARA TEST ------------------------------------------
const cancion_1 = {
    nombre: 'Luck Ra, Bersuit Vergarabat, La T y La M - TOCO Y ME VOY',
    genero: 'Cumbia',
    duracion: '3:50'
}

const cancion_2 = {
    nombre: 'LIT killah, Duki, Emilia, Tiago PZK, FMK, Rusherking, Maria Becerra, Big One - Los Del Espacio',
    genero: 'Urbano latino',
    duracion: '5:40'
}

const cancion_3 = {
    nombre: 'Luck Ra, Abel Pintos - QUE ME FALTE TODO',
    genero: 'Cumbia',
    duracion: '2:30'
}

const cancion_4 = {
    nombre: 'YSY A - CUÁNTO VALE HACER EL AMOR?',
    genero: 'Dance/Electrónica',
    duracion: '2:40'
}


// ----------------------- RESOLUCION EJERCICIO ----------------------------------
const crearCatalogo = () => {
    let catalogo = []

    const agregarCancion = (cancion) => {
        catalogo.push(cancion)
    }

    const listaCancion = () => {
        if (catalogo.length == 0){
            return 'Catalogo vacío \n'
        }
        else {
            let lista = ''
            catalogo.map (cancion => {
                lista += 'Genero ' + cancion.genero + ': ' + cancion.nombre + ' (' + cancion.duracion + ' min)' + '\n'
            })
    
            return lista
        }
    }

    const buscarCancion = ({genero}) => {
        const nuevoCatalogo = catalogo.filter (cancion => cancion.genero === genero)
        let lista = ''
        nuevoCatalogo.map (cancion => {
            lista += 'Genero ' + cancion.genero + ': ' + cancion.nombre + ' (' + cancion.duracion + ' min)' + '\n'
        })

        return lista

    }

    const calcularPromedioDuracion = () => {
        if (catalogo.length != 0){
            const arrayDeDuracion = catalogo.map (cancion => {
                let separador = cancion.duracion.split (':')
                return parseInt(separador[0])*60 + parseInt(separador[1])
            })
            const promedio = (arrayDeDuracion.reduce((acumulador, actual) => acumulador + actual)) / arrayDeDuracion.length
            return 'El promedio del catalogo es: ' + promedio + ' segundo' 
        }

        return 'Catalogo vacio'
    }

    return { agregarCancion, listaCancion, buscarCancion, calcularPromedioDuracion }
}


//----------------------------------- TEST ---------------------------------------
const MiCatalogo = crearCatalogo()
console.log(MiCatalogo.listaCancion())
MiCatalogo.agregarCancion(cancion_1)
MiCatalogo.agregarCancion(cancion_2)
MiCatalogo.agregarCancion(cancion_3)
console.log(MiCatalogo.listaCancion())
console.log(MiCatalogo.buscarCancion(cancion_1))
console.log(MiCatalogo.buscarCancion(cancion_4)) // Devuelve un array vacio
console.log(MiCatalogo.calcularPromedioDuracion())
