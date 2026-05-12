// Actividad 1
alert("Bienvenidos");
console.log("Hola");

document.querySelector('.title').innerHTML = "Hola a todos.";
// Actividad 2
document.querySelector("#boton").onclick = function(){
document.body.style.backgroundColor = "lightblue";
}
//Actividad 3
let nombre = "Curso de Programación Web";
let descripcion = "Aprendemos HTML, CSS y JavaScript";
let precio = 9000;


document.getElementById("NombreProducto").innerHTML = nombre;
document.getElementById("descripcionProducto").innerHTML = descripcion;
document.getElementById("precioProducto").innerHTML = "El precio es: $"+precio;

//Actividad 4


let tituloCurso = "Curso de Frontend";
let descripcionCurso = "Aprendemos HTML, CSS, JavaScript y React";
let precioCurso = 15000;
let estadoCurso = "Disponible";

document.getElementById("tituloCurso").innerHTML = tituloCurso;
document.getElementById("descripcionCurso").innerHTML = descripcionCurso;
document.getElementById("precioCurso").innerHTML = "El precio es: $"+precioCurso;
document.getElementById("estadoCurso").innerHTML = estadoCurso;

