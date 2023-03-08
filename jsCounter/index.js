let count = 0
function increment(){
 count ++
 document.querySelector(".value").innerHTML = count
}
function decrement(){
 if(count>0){
  count --
  document.querySelector(".value").innerHTML = count
 }
}
function Reset(){
 count = 0
 document.querySelector(".value").innerHTML = count
}