import { valida } from "./validaciones.js";
// manipulando el DOM video 04.cocluir tarea vid 03 concl, habla del target, que es el elemento que esta tocando el usuario
const inputs = document.querySelectorAll("input");
// // recuerde que a los array los podemos iterar con forEach, por ejemplo llegara a data-tipo="nacimiento" peor aqui agarra asi dta-tipo.addEventListener("blur", (data-tipo) => {})
inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});

const colores = ["rojo", "verde", "blanco"];
console.log(colores);
// colores.forEach(())