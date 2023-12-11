const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

/*El error está en la condicion de iteracion
numeros.length devuelve 5. Lo cual si ponemos la condicion <= excederia el tamaño de nuestro array
Como entra a un area de memoria desconocida y no puede realizar la operaciond de suma, devuelvía NaN
*/
    for (let i = 0; i < numeros.length; i++){
        sumaTotal += numeros[i];
    }
    console.log(numeros.length)
    let promedio = sumaTotal / numeros.length;
    
    return promedio
}

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio (listaNumeros)