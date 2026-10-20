// API -> Aplication Programing Interfase 

//APIs incorporadas y APIs externas(asincronia)

//APIs incorporadas -> canvas , geolocation , Drag & Drop , Web Storage 




//Geolocation -> obtener las coordenadas del dispositivo 


//getCurrentPosition() - watchPosition()

    function functionFound(position){
        console.log(position)
        let parrafo=document.querySelector("p");
        parrafo.textContent=` el dispositivo se encuentra en las coordenadas ${position.coords.latitude} y ${position.coords.longitude}
    
        con un margen de error de ${position.coords.accuracy} metros`
    }
    function functionLost(error){
        alert("no se pudo obtener ubicacion")
        // 3 tipos de codigo -> 1 usuario denegado , 2(no llego a obtener ubicacion)  y 3 timeout (no hubo suficiente tiempo)
        console.log(error)
        let parrafo=document.querySelector("p");

        if(error.code ==1){
            parrafo.textContent="Permiso denegado, necesitamos que nos acepte el pedido para poder ubicarlo"
        }
        if(error.code==3){
            parrafo.textContent="Error en tiempos, le pedimos que se ponga en contacto con los desarrolladores"
        }

        if(error.code==2){
            parrafo.textContent="Error,pruebe mas tarde "
        }
    }

    let objetoConfig={
        enableHighAccuracy:true, //tener el menor margen de error posible 
    }
navigator.geolocation.getCurrentPosition(functionFound,functionLost,objetoConfig)