let botonRotar= document.querySelector("#botonRotar");


botonRotar.addEventListener("click",()=>{
    let padre=document.querySelector(".padre");
    padre.classList.toggle("animar")
}
)