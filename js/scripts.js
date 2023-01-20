// let form = document.querySelector("form");
// let p = document.getElementById("results");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   let number1 = Number(document.querySelector("input#number1").value);
//   let number2 = Number(document.querySelector("input#number2").value);
//   let results = [];
//   p.innerHTML = "";

//   // console.log(number1)
//   if (number1 % number2 === 0) {
//     for (let index = number2; index <= number1; index+= number2) {
//       results.push(index)
//       console.log(index)
//     } 
//     p.append(results.join(", "))
//   }






// // });

// let form2 = document.getElementById('form');
// let p = document.getElementById('results')
// let userInput = document.getElementById('sentence')

// function pigLatin(text) {

//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const usrTxt = text.split(' ');
//   const output = [];

//   usrTxt.forEach((word) => {

//     if (vowels.includes(word[0])) {


//       output.push(word.concat("way"));

//     } else if (!vowels.includes(word[0])) {

//       let cons = "";
//       let end = "";
//       let count = 0;

//       if (word[0] === 'q' && word[1] === 'u') {

//         count = 2;
//         cons = 'qu';

//       } else {

//         for (let i = 0; !vowels.includes(word[i]); i++) {

//           if (word[i] === 'q') {

//             break;

//           } else {

//             count++;
//             cons += word[i];

//           }
//         }
//       }

//       end += (word.slice(count++));
//       output.push(end + cons + 'ay')

//     }

//   });
//   return output

// }

// form2.addEventListener("submit", function (event) {
//   let p = document.getElementById('results')
//   let userInput = document.getElementById('sentence').value
//   console.log(userInput)
//   event.preventDefault();
//   p.append(pigLatin(userInput).join(' '))
// })



// let form2 = document.getElementById('form');
// let p = document.getElementById('results')
// let userInput = document.getElementById('sentence')

function pigLatin(text) {

  const usrTxt = text.split(' ');
  const output = [];

  let vowelArr = usrTxt.filter(words => words.match(/\b[aeiou]\w*\b/gi)).map(word => word + "way");

  let consArr = usrTxt.filter(words => words.match(/\b[^qaeiou]+(q|[aeiou])\w*\b/gi)).map(word => {
    return word.replace(/\b[^qaeiou]+/gi, "")
  });

  

  console.log(consArr)

}

// form2.addEventListener("submit", function (event) {
//   let p = document.getElementById('results')
//   let userInput = document.getElementById('sentence').value
  
//   event.preventDefault();
//   p.append(pigLatin(userInput).join(' '))
// })