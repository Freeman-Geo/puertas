

const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")

let ptaDer = document.getElementById("puerta-der")
let ptaIzq = document.getElementById("puerta-Izq")

const topMenu1 = document.getElementById("top-menu-1") 
const topMenu2 = document.getElementById("top-menu-2") 
const topMenu3 = document.getElementById("top-menu-3") 

const dispMundo1 = document.getElementById("mundo1-container")
const dispMundo2 = document.getElementById("mundo2-container")
const dispMundo3 = document.getElementById("mundo3-container")


boton1.addEventListener("click",()=>{
    
    topMenu1.style.backgroundColor="orangered"
    topMenu1.style.color="black"
    topMenu2.style.backgroundColor="black"
    topMenu2.style.color="white"
    topMenu3.style.backgroundColor="black"
    topMenu3.style.color="white"
    boton1.style.backgroundImage="none"
    boton1.style.backgroundColor="orangered"
    ptaDer.style.width="42.5vw"
    ptaIzq.style.width="42.5vw"
    setTimeout(() => {
        ptaDer.style.width = "0vw";
        ptaIzq.style.width = "0vw";
        dispMundo1.style.display="block"
        dispMundo2.style.display="none"
        dispMundo3.style.display="none"
    }, 2500);
})

boton2.addEventListener("click",()=>{
    topMenu2.style.backgroundColor="orangered"
    topMenu2.style.color="black"
    topMenu1.style.backgroundColor="black"
    topMenu1.style.color="white"
    topMenu3.style.backgroundColor="black"
    topMenu3.style.color="white"
    boton2.style.backgroundImage="none"
    boton2.style.backgroundColor="orangered"
    ptaDer.style.width="42.5vw"
    ptaIzq.style.width="42.5vw"
    setTimeout(() => {
        ptaDer.style.width = "0vw";
        ptaIzq.style.width = "0vw";
        dispMundo2.style.display="block"
        dispMundo1.style.display="none"
        dispMundo3.style.display="none"
    }, 2500);
})

boton3.addEventListener("click",()=>{
    topMenu3.style.backgroundColor="orangered"
    topMenu3.style.color="black"
    topMenu2.style.backgroundColor="black"
    topMenu2.style.color="white"
    topMenu1.style.backgroundColor="black"
    topMenu1.style.color="white"
    boton3.style.backgroundImage="none"
    boton3.style.backgroundColor="orangered"
    ptaDer.style.width="42.5vw"
    ptaIzq.style.width="42.5vw"
    setTimeout(() => {
        ptaDer.style.width = "0vw";
        ptaIzq.style.width = "0vw";
        dispMundo3.style.display="block"
        dispMundo2.style.display="none"
        dispMundo1.style.display="none"
    }, 2500);
})

boton1.addEventListener("mouseout",()=>{
    boton1.style.backgroundColor="none"
    boton1.style.backgroundImage="linear-gradient(60deg, black, #aaa, #ccc, #bbb,black,white,black,white,#bbb,#ccc,#aaa)"
})

boton2.addEventListener("mouseout",()=>{
    boton2.style.backgroundColor="none"
    boton2.style.backgroundImage="linear-gradient(60deg, black, #aaa, #ccc, #bbb,black,white,black,white,#bbb,#ccc,#aaa)"
})

boton3.addEventListener("mouseout",()=>{
    boton3.style.backgroundColor="none"
    boton3.style.backgroundImage="linear-gradient(60deg, black, #aaa, #ccc, #bbb,black,white,black,white,#bbb,#ccc,#aaa)"
})

