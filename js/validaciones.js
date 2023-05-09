const inputNacimiento = document.querySelector("#birth");
// console.log(inputNacimiento);


// Blur es cuando hace click e introduce los datos y despues de salirse o hacer click en otro lado manda a ejecutar la funcion
inputNacimiento.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
    // console.log(evento);
})

// Esta funcion valida Nacimiento tiene el parametro input que se hace llamar en inputNacimiento en funcion al target que es donde estan todos los parametros del objeto asi donde este input sera por ejemplo evento.target.value del objeto #birth
function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    mayorEdad(fechaCliente);
    console.log(fechaCliente);
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
}