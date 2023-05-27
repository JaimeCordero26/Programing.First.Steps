// 1. Crear una función que reciba dos números como parámetros y los sume

function suma(a, b){
    return a + b
    //return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función
}
//console.log(suma(2,2))


/* En este punto lo que debes de hacer es tomar el arreglo de numeros
 ex: [1,2,3,4,5]
 y sumar cada numero 1 + 2 + 3 + 4 + 5 = 15
 lo que estoy viendo en el resultado es la concatenacion del arreglo
*/
// 2. Crear una función que reciba un arreglo de números y los sume
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const num3 = [7, 8, 9]

const numeros = num1.concat(num2, num3)

//console.log(numeros)
//Concat se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array


//3. Crear una función que reciba una cadena de texto y la imprima en mayúsculas
const nombre = 'Jaime';
const apellido = 'Cordero'
const edad = 16
const edadFuturo = edad + 1
const nombreCompleto = `Yo soy: ${nombre}, ${apellido}, mi edad es ${edad} y mi edad el próximo año va a ser ${edadFuturo}`
//console.log(nombreCompleto.toUpperCase())
//toUpperCase devuelve el valor de la cadena convertida a mayúsculas pero sin afectar el valor de esta misma


/*Aqui lo que tienes que hacer es algo similar al punto de arriba, tomar el objecto
e imprimirlo como una cadena de texto ejemplo: `${obj.name} ....`*/
//4. Crear una función que reciba un objeto con los campos nombre y edad, y lo imprima en una cadena de texto
const objectNombre = {
    nombree: 'Jaime',
    edadd: 16
}

function nameCompleto(param){
//console.log(`Yo soy: ${param.nombree} y tengo ${param.edadd} annos`)
}
nameCompleto(objectNombre)

// Recuerde crear las funciones
//5. Crear una función que reciba un arreglo de números y retorne el número más grande
const arrayNumero
const num4 =26, num5 =52, num6 =2
const numMax = Math.max(num4, num5, num6)
//console.log(numMax)
//Math. max() retorna el mayor de cero o más números dados como parámetros de entrada, o NaN si cualquier parámetro no es un número y no puede ser convertido en uno



//6. Crear una función que reciba un número y retorne si es par o impar
const numeroParImpar = 4;
if((numeroParImpar % 2) === 0){
    //console.log(numeroParImpar + ' es par');
}else{
    //console.log(numeroParImpar + ' es impar');
}
//If nos permite introducir una situación que debe ser verdadera para que una acción suceda. (si)
//Else permite definir un bloque de código en caso de que la condición del if no se cumpla. (si no)



//7. Crear una función que reciba una cadena de texto y un carácter, y retorne el número de veces que aparece el carácter en la cadena




/*
* En este punto es algo similar al punto 3, recuerde crear las funciones*/
//8. Crear una función que reciba un objeto con los campos nombre y apellido, y retorne una cadena de texto con el nombre completo
let ObjectNombrePropio = {
    nombrePropio: 'Jaime',
    apellidoPropio: 'Cordero',
}
//console.log(ObjectNombrePropio)

/*En este punto solo le falto crear la funcion. ejemplo mas abajo*/

//9.Crear una función que reciba un número y retorne su tabla de multiplicar
let numeroMultiplicando = 2;
//Creamos una variable y le damos el valor del n[umero al que queremos sacarle la tabla de multiplicar]
let limiteDeMultiplicacion = 12
//Creamos una variable que nos sirva como el parametro de veces que se multiplicara el numero
//for(numeroMultiplicador = 1; numeroMultiplicador <= limiteDeMultiplicacion; numeroMultiplicador++)
//Utilizamos for porque nos servira para actualizar o incrementar la variable contador; definimos el limite minimo de la multiplicacion en 1 (desde aca se iniciara a multiplicar); luego definimos el limite maximo de la multiplicacion con "numeroMultiplicador <= limiteDeMultiplicacion" (esto se traduce como: cuando el numero multiplicador sea menor o igual a la limite de la multiplicacion (que en este caso es el parametero de veces a multiplicar) pare; seguido de eso establecemos que el numeroMultiplicador aumente de uno en uno utilizando "++"
    //console.log(numeroMultiplicando + "X" + numeroMultiplicador + "=" + (numeroMultiplicando * numeroMultiplicador))


//  function here =
const tablaMultiplicar = (num) => {
    let tabla = ''
    for (let i = 1; i <= 12; i++) {
        tabla += `${num} x ${i} = ${(num * i)} \n`
    }
    return tabla
}
// call/result here  =
//console.log(tablaMultiplicar(2))

