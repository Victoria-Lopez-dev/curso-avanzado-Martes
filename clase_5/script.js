//APIS

//canvas -> API grafica incorporada desde HTML5

//API?? -> Aplication Programing Interfase 
//conjunto de facilidad que vienen a solucionar cosas complejas de una manera simple
//me pueden servir tambien para obtener cierta informacion,para gestinar algunas funcionalidades 
//API incorporadas en el codigo (solo las utilizamos cuando necesitamos)
//API externas -> las incorporar /llamar desde nuestro codigo - (asincronia )y luego podemos utilizarlas 

//------------------------------------------------------------

function cambio(nav){
    nav.classList.toggle("cambioNav")
}

function mostrar(){

//document -> HTML
// window -> pantalla
//  -> innerHeight (alto de la ventana/pantalla)
// -> scrollY( la distancia que se scrolleo desde el inicio)
let nav=document.querySelector("nav");
    console.log(window.scrollY)

if(window.scrollY>window.innerHeight*0.2){
    nav.classList.add("cambioNav")
}else{
    nav.classList.remove("cambioNav")
}

}