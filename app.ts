let curso: string = "Programación Web";
let descripcion: string = "Aprende HTML, CSS  JavaScript";
let precio: number = 15000;
let disponible : boolean = true;

let tituloCurso = document.querySelector("#tituloCurso");
let descripcionCurso = document.querySelector("#descripcionCurso");
let precioCurso = document.querySelector("#precioCurso");
let estadoCurso = document.querySelector("#estadoCurso");

if(tituloCurso){
    tituloCurso.innerHTML = curso;
}
if(descripcionCurso){
    descripcionCurso.innerHTML = descripcion;
}
if(precioCurso){
    precioCurso.innerHTML = "Precio: $"+ precio;
}
if(estadoCurso){
    if(disponible){
        estadoCurso.innerHTML = "Cupos disponibles";
    }
    else{
        estadoCurso.innerHTML = "Curso completo";
    }
}
alert("Bienvenidos");
console.log("Hola");

let boton = document.querySelector("#boton") as HTMLButtonElement | null;
if(boton){
    boton.onclick = function()
        {
            document.body.style.background = "lightblue";
        };
}