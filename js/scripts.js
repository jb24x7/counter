let form = document.querySelector("form");
let p = document.getElementById("results");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  let number1 = Number(document.querySelector("input#number1").value);
  let number2 = Number(document.querySelector("input#number2").value);
  let results = [];
  p.innerHTML = "";

  // console.log(number1)
  if (number1 % number2 === 0) {
    for (let index = number2; index <= number1; index+= number2) {
      results.push(index)
      console.log(index)
    } 
    p.append(results.join(", "))
  }






});