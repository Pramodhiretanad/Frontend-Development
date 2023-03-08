// let a = document.getElementById("pramod")
// a.innerHTML = "Pramod"
// let a = document.querySelector("#pramod")
// a.innerHTML = "Nanadan"

// let a = document.querySelector(".name")
// a.style.fontSize = "33px"

let Show = document.querySelector(".show")
let Hide = document.querySelector(".hide")
let item1 =document.querySelector(".item1")

Show.addEventListener("click", show)
Hide.addEventListener("click", hide)
function show(){
 item1.style.visibility = "visible"
}

function hide(){
 item1.style.visibility = "hidden"
}