let menuBtn  = document.getElementById("menubtn")
let body = document.body
let header = document.getElementById("header")
let menu = document.getElementById("menu_nav")
function toggleMenu(e){
    if(menu.classList.contains("closedMenu") && e.target == menuBtn ){
        menu.classList.remove("closedMenu")
    }else{
        menu.classList.add("closedMenu")
    }

}
body.addEventListener("click", toggleMenu)