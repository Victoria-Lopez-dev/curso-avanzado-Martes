console.dir(document.querySelector("video"))

//video y audio
//metodo play() -> activa la reproduccion 
//metodo pause()-> pausa la reproduccion 
//algunas propiedades:
//duration -> duracion en segundos del audio o del video
//currentTime -> tiempo en segundos actual en el que se encuentra el audio/video
//muted -> booleano que nos permite cancelar el sonido


let botonAudio=document.querySelector("#btn-audio");

botonAudio.addEventListener("click",()=>{
    let audio=document.querySelector("audio");
    let estado=document.querySelector(".estado");
    if(estado.textContent == "ON"){
        audio.play();
        estado.textContent="OFF"    
    }else{
        audio.pause();
        estado.textContent="ON" 
    }
});



//---------------------------------------------------
let video2=document.querySelector("#video2")
let play=document.querySelector("#video-play")
let pause=document.querySelector("#video-pause")
let muestraTiempoActual;
/* video2.addEventListener("click",()=>{
    video2.play()
 })*/

const transformarTiempo=(tiempo)=>{
    let minutos;
    let segundos;
    if(tiempo>60){
        minutos=parseInt(tiempo/60)
        segundos=tiempo%60
    }else{
        minutos='00'
        segundos=parseInt(tiempo)
    }
    if(segundos<10){
        segundos=`0${segundos}`
    }
    return `${minutos}:${segundos}`
};


const mostrarDuracion=()=>{
     document.querySelector("#duracion-total").textContent=transformarTiempo(video2.duration)
}
 
play.addEventListener("click",()=>{
    video2.play()
    console.dir(video2)

    
   muestraTiempoActual=setInterval(()=>{_
    let tiempo= transformarTiempo(video2.currentTime);
    document.querySelector("#duracion-actual").textContent=tiempo
   let progresoACtual=parseInt((video2.currentTime/video2.duration)*100 )// porcentaje del avance
   console.log(document.querySelector(".progreso").width)
    document.querySelector(".progreso").style.width=`${progresoACtual}%`

},100)
});

pause.addEventListener("click",()=>{
    video2.pause();
    clearInterval(muestraTiempoActual)
});

//setInterval(()=>{},ms) -> ejecutar una funcion cada cierto tiempo
//clearInterval(setInterval) -> limpiar un intervalo(cancelar un setInterval que se ejecuto en algun momento)