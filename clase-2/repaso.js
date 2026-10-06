//DOM -> Document Object Model 
//interfaz entre HTML y JS. Modificacion en CSS desde JS se hace de manera indirecta 
//nodos -> elementos del HTML que arma el DOM (formato de objeto )
//document -> palabra reservada referencia al documento HTML al que el script este vinculado
// objetos JS
// propiedad:valor
/*

{
    propiedad:valor,
    propiedad:valor,
    propiedad:valor
}
*/

//llamar al nodo -> metodos -> document.metodo();
//querySelector("selector")/querySelectorAll("selector");

//utilizar sus propiedades

let botonC1=document.querySelector("#boton1");

console.dir(botonC1)
console.log(botonC1.textContent)
botonC1.textContent="Boton 1"
botonC1.classList.add("fondo")



// eventos ->  accion que tiene principio y fin -> escuchas


/* tres partes de un evento (en JS)
- nodo/elemento en el que establezco la escucha (donde ocurre el evento)

-el evento -> que estoy esperando a que ocurra sobre ese elemento? 

- funcion como respuesta -> una vez que paso ese evento que hago?
*/

/*
sintaxis 
A) addEventListener()
nodo.addEventListener("evento",()=>{})

B) atributo etiqueta HTMl -> on+evento=funcion() | desde JS defino funcion()

*/
// click - change - input- focus- mouseover- blur- ...
let contador=0
botonC1.addEventListener("click",()=>{
    //document.querySelector("span").innerText=contador++
    console.log(contador++)
})

function cambioColor(){
    let fondo=document.querySelector("section").style.backgroundColor;

    if(fondo === "lightblue"){
        document.querySelector("section").style.backgroundColor='transparent'
    }else{
        document.querySelector("section").style.backgroundColor="lightblue"
    }

}

document.querySelector("h1").addEventListener("mouseover",()=>{
    document.querySelector("h1").textContent="Cambio titulo..."
})