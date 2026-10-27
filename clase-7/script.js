//Web Storage -> APi incorporada que nos permite hacer es almacenar informacion en el navegador.
//evitar datos sensibles 

//LocalStorage -> almacenar informacion y tener el control de cuando eliminarlo

//SessioStorage-> se borra por  sesion


//metodos : 
// setItem(key,valor) -> guardar informacion.Key es un string
//  getItem(key) -> para obtener la informacion.Key es un string
//  removeItem() ->borrar ese dato almacenado 
// clear() -> borra todo lo que esta almacenado en ese mecanismo
//los datos,valores que almacenamos en webStorage se guardan como texto - string


let dato='Juan';

localStorage.setItem("nombre",dato);
dato="Marta"
console.log(localStorage.getItem('nombre'));


console.log(dato)
localStorage.setItem('numero',33);

let datoObtenido=localStorage.getItem('numero');//trajo un string


console.log(40+datoObtenido)

let silla={
    producto:'silla',
    precio:3100,
    stock:20
}
let sillon={  producto:'sillon',
    precio:2800,
    stock:20
}
let cama={  producto:'cama',
    precio:3800,
    stock:20
}

sessionStorage.setItem("silla",JSON.stringify(silla))

//JSON -> JavaScript Object Notation -> formato de tipo texto 

let infoSilla=sessionStorage.getItem('silla');
infoSilla=JSON.parse(infoSilla)
console.log(infoSilla)
//2 metodos para transformar que se encuentran dentro JSON:

//stringify -> transformar array/objetos en JSON
//parse -> transformar de JSON a array/objetos



//---------------------------------------

 let listaCompra=[]

//una vez pulsado el boton cambia el tema y guarda en storage que tema se definio
const tema=(tema)=>{
  let boton=document.getElementById("botonTheme")
    if(tema == "DAY"){
        boton.textContent ="NIGHT";
        document.body.classList.add("night");
        localStorage.setItem("tema","NIGHT")
    }else{
        boton.textContent = "DAY";
        document.body.classList.remove("night")
        localStorage.setItem("tema","DAY")
    }
};

//funcion que se ejecuta apenas se carga el body del HTML

const carga=()=>{
    //definir el tema inicial

    let temaGuardado=localStorage.getItem("tema");//string
     let boton=document.getElementById("botonTheme")

   if(temaGuardado == "NIGHT"){
        boton.textContent ="NIGHT";
        document.body.classList.add("night");
    }
    

    //actualizar el contador
    let cantidadGuardada=localStorage.getItem("cantidad");
    if(cantidadGuardada !==null){
        let contador=document.getElementById("count");
        contador.textContent=cantidadGuardada;

        let listaGuardada=localStorage.getItem("carritoCompra");
        listaCompra=JSON.parse(listaGuardada)
    }
    //actualice la listaCompras
    

}

const sumarAlCarrito=(nombreProducto)=>{
    //buscamos el contador y le sumamos 1
    let contador=document.getElementById("count");

    contador.textContent=parseInt(contador.textContent)+1;

    localStorage.setItem("cantidad",contador.textContent);
   
    switch(nombreProducto){
        case "sillon":
            listaCompra.push(sillon)
        break;
        
        case "cama":
            listaCompra.push(cama)
        break;
        
        case "silla":
            listaCompra.push(silla)
        break;

    }
    //vamos a guardarlo en localStorage
    localStorage.setItem('carritoCompra',JSON.stringify(listaCompra))
}
