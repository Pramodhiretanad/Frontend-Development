// const red = document.querySelector(".red1")
// const green = document.querySelector(".green2")
// const yellow = document.querySelector(".yellow3")
// const blue = document.querySelector(".blue4")
// const item = document.querySelector(".item")

// function Red(){
//  item.style.backgroundColor = "red"
// }
// function Green(){
//  item.style.backgroundColor = "green"
// }
// function Yellow(){
//  item.style.backgroundColor = "yellow"
// }
// function Blue(){
//  item.style.backgroundColor = "blue"
// }
// red.addEventListener("click",Red)
// green.addEventListener("click",Green)
// yellow.addEventListener("click",Yellow)
// blue.addEventListener("click",Blue)
// let a = "10"
// console.log(typeof a);
const item = document.querySelector(".item")

// const userdata=[

//   {name:"pramod",city:"Haveri"}, 
//   {name:"nandan",city:"belagavi"},
//   {name:"bharath",city:"davanagere"}
 
//  ]

//  for (let i = 0; i < userdata.length; i++) {
//   item.innerHTML+=`
//   <li class="user">${userdata[i].name} - ${userdata[i].city}</li>
//   `
//  }


let data=fetch("https://dummyjson.com/products")
data.then((res)=>res.json())
.then((data)=>{

 // console.log(data["products"]);
 let arr=data["products"]

 for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  item.innerHTML+=
  `
  <li>${element.description}</li>
  `
  console.log(element.title);
  
 }
})