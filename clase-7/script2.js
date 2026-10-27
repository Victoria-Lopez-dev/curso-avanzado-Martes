const cargaInicial=()=>{
    //definir el tema inicial
    
    let temaGuardado=localStorage.getItem("tema");//string

   if(temaGuardado == "NIGHT"){
        document.body.classList.add("night");
    }

    //mostrar la lista de compra que cargo

    let listaCompra=localStorage.getItem('carritoCompra');

    if(listaCompra !==null){
        listaCompra=JSON.parse(listaCompra)
        document.getElementById("cantidad").textContent=listaCompra.length;
        let lista=document.querySelector("ul");

        for(item of listaCompra){
            let li=document.createElement("li");
            li.textContent=`producto :${item.producto} , precio :${item.precio}`;
            lista.appendChild(li)

        }


    }else{
        document.getElementById("cantidad").textContent= 0
    }
    
}