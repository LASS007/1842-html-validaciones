export function valida(input){
    // // el dataset lo que hace es tomar todo los data- con union tipo, es decir todos los data-tipo y cada data-tipo tendra = "bandera caracteristica propia 'palabra ejemplo "nacimiento" en este caso' " por lo caul va escanear y el escaner se hace haciendo una funcion para cada uno con el forEach en app.js, al caer nacimiento este sera el nuevo tipoDeInput donde en el if sera if(validadores[nacimiento]) lo que llamara a nacimiento en validadores 
    // // En pocas palabras el dataset sirve para agarrar el valor del data-
    const tipoDeInput = input.dataset.tipo;
    // Recuerda que los objetos son valores compuestos que puede tener o asiganar a una cosntante y dentro tienen keys o llaves y cada key se puede clasificar como atributos/propiedades que son como otras constantes y las funciones serian metodos que necsitan los () para ejecutarla, por eso validadores[tipoDeInput](input) es similar a validadores.tipoDeInput(input); ref: https://youtu.be/4xig5UPRC00
    // Aqui hace que cuando agarre el dataset la variante "nacimiento" el if dara verdadero que existe la key validadores[nacimiento] entonces ejecutara 
    if (validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    // console.log(input.parentElement);
    //Para ver el validity debes inpeccionar estando en el input o formulario y asi es como estara referenciado el $0 y de ahi ya se puede navegar al $0.validity

    //el input va ser el target o objeto de un scaneo de todos los inputs en el html, y el validity.valid es true si el user escibio y false si lo dejo vacio
    if (input.validity.valid) {
        // quiero que en padre de input, que seran los div quite la clase input-conta.... que es un mesaje de input requerido, cuando se detecte que si escribio algo entoces has lo siguiente
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    } else {
        // caso que sea falso osea que este vacio agrega la advertencia de campo requerido
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}

//array para recorrer con un forEach hacer una iteracion
const tipoDeErrores = [ 
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

//Estos valores estan en el validityStatus y cada uno representa por ejemplo si el usuario no ingreso texto entre otros
const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "El campo contrasenia no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, maximo 12, al menos una letra minuscula, una mayuscula, un numero y no debe contener caracteres especiales"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad"
    },

};

const validadores = {
    nacimiento: (input) => validarNacimiento(input)
};

//el tipodeinput sera igual al data- especifico en el que intereactue blur y el error es el parametro donde sera reemplazado por cada elemento del array tipoDeErrores secc 04 mensajes vid 05 tipos de errores
function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach( (error) => {
        //el elemento de input hace referencia a todos los input que solo mandara a cambiar deoendieno donde vaya interactuando el user y buscara si es true o false en el objeto validity
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            //accedemos al obejto mesajesdeError y luego a la llave de la llave
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje;
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