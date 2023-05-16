export function valida(input){
    // el dataset lo que hace es tomar todo los dataset existentes y el .tipo es como agarrar el que definimos en html "data-tipo"
    const tipoDeInput = input.dataset.tipo;
    // Recuerda que los objetos son valores compuestos que puede tener o asiganar a una cosntante y dentro tienen keys o llaves y cada key se puede clasificar como atributos/propiedades que son como otras constantes y las funciones serian metodos que necsitan los () para ejecutarla, por eso validadores[tipoDeInput](input) es similar a validadores.tipoDeInput(input); ref: https://youtu.be/4xig5UPRC00
    if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
}

const validadores = {
    nacimiento: (input) => validarNacimiento(input)
};

// const inputNacimiento = document.querySelector("#birth");
// console.log(inputNacimiento);
// Blur es cuando hace click e introduce los datos y despues de salirse o hacer click en otro lado manda a ejecutar la funcion
// inputNacimiento.addEventListener("blur", (evento) => {
//     validarNacimiento(evento.target);
//     // console.log(evento);
// })

// Esta funcion valida Nacimiento tiene el parametro input que se hace llamar en inputNacimiento en funcion al target que es donde estan todos los parametros del objeto asi donde este input sera por ejemplo evento.target.value del objeto #birth
function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    // Si es falso ! entonces mensaje igua a
    if (!mayorEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad";
    }

    // console.log(fechaCliente);
    // setCustomValidity sirve para personalizar el mensaje de error en el input, asi como en html seria la etiqueta title,
    input.setCustomValidity(mensaje);
} 

function mayorEdad(fecha){
    const fechaActual = new Date();
    // Aqui estamos guardando la fecha cuando tenga sumados 18 años a la edad dada por el cliente
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    console.log(diferenciaFechas <= fechaActual);
    return diferenciaFechas <= fechaActual;
}