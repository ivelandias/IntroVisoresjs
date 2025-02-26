// foreach permite recorrer un iterable como lo es el for 

let arreglo=[4,6,8,3,4,6];

arreglo.forEach ( (valor, indice) => {
    console.log(valor)
}

)// declaración deuna función dentro de los paréntesis
// funciones clásicas, tipo lambda o flecha, anónimas

// map: recorrer y aplicar una función a cada elemento del arreglo, me devuelve un arreglo
function calcularCuadrado (valor){
    return valor ** 2;
}
let cuadrados = arreglo.map(calcularCuadrado);

// imorimir cuadrados 

console.log(arreglo);
cuadrados.forEach((valor, indice)=>{
    console.log(valor);
}
)
// filtros, crear un nuevo arreglo con lo selementos que cumplen una condición
function mayor50(valor){
    return valor>50;
}

let mayores50= cuadrados.filter (mayor50); // si esa condición se cumple lo guarda en el arreglo "mayores50"
console.log (mayores50);

console.warn ("mensaje");
// console. muestra en la consola de la página web 


//slice, subconjunto de elementos a partir de un arreglo 
let parte= arreglo.slice(2,4)
console.log(arreglo)
console.info(parte)
