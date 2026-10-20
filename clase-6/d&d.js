
/* 7 eventos 
elemento que queremos arrastrar -> dragstart -dragend - drag 

elemento en el cual queremos manipilar el elemento arrastrado-> dragleave- dragover - drop- dragenter
*/

// elementos arrastrables -> draggable=true 
//por defecto las imagenes y las anclas son arrastrables por (draggable en true)
// objeto dataTransfer que tiene tres metodos:
//setData(tipo,dato)-> almacenar informacion(texto)
//getData(tipo) -> obtener informacion(texto)
//clearData(tipo)-> borrar informacion almacenada


//tipo -> text/plain , text/html , text/uri-list,Text,URL

///------------------------
//addEventListener()

let h1=document.querySelector("#tituloUnico");


//dragstart -> el inicio del arraste 
h1.addEventListener("dragstart",(event)=>{
    console.log("inicio de arrastre");
    event.dataTransfer.setData("Text",h1.id)
});

// // - drag -> se ejecuta siempre que mueva un elemento que tengo arranstrando
// h1.addEventListener("drag",()=>{
//     console.log('se esta moviendo el h1 con el mause - se esta arrastrando')
// })

// //  dragend ->cuando soltamos un elemento arrastrado
// h1.addEventListener("dragend",()=>{
//     console.log(" soltamos el h1 arrastrado")
// })

//---------------------------
const functionDEnter=()=>{
    //console.log("algo esta siendo arrastrado dentro de nuestra zona....")
}
const functionDLeave=()=>{
    //console.log("algo arrastrado esta saliendo de nuestra zona")
}

const functionDOver=(e)=>{
    e.preventDefault();    // no haga su accion por defecto -> preventDefault()

   // console.log("algo esta moviendose ,siendo arrastrado dentro de nuestra zona")
}
const functionDrop=(event)=>{
    console.log("algo se solto dentro de esta zona");
    let data=event.dataTransfer.getData("URL");
    let info=event.dataTransfer.getData("Text");
    console.log(data)
    if(data == '' || data == undefined){
        let zona=document.querySelector(".zona-destino");
    // zona.appendChild(document.querySelector(`#${info}`))
        let elemento=document.querySelector(`#${info}`)
    zona.innerHTML=`<h2 id=${info}>${elemento.textContent}</h2>`

    }else{
        let zona=document.querySelector(".zona-destino");
        zona.innerHTML=`<img src=${data}/>`
    }
    console.log(event.dataTransfer.files)

}


//arrastrar un elemento interno del mismo html -> dragstart - dragover-drop

// arrastrar un elemento externo -> dragover-drop


const arrastreImg=(event)=>{
    let imagen=event.target
    event.dataTransfer.setData("URL",imagen.src)
}

////////--------------------------------------------


/* JSON -> JavaScript Object Notation

formato de tipo texto que se asemeja a un array de objetos o un objeto de objetos

JSON + metodos : 
parse() -> transforma en JSON un array o un objeto
stringify() -> transformar un array/objeto a un JSON

*/


let info=[{
    nombre:"pepe",
    edad:33
}]

let infoJSON=JSON.stringify(info)
console.log(info[0].nombre)
let infoParseada=JSON.parse(infoJSON)
console.log(infoParseada[0].edad)

