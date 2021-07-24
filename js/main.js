const menu = document.querySelector(".menu__hamburguer");
const links = document.querySelector(".container__links");


menu.addEventListener("click", (e)=>{

    links.classList.toggle("hamburguer__buton")
    links.classList.toggle("mostrar")

console.log(e)})

