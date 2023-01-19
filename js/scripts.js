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






// });

let form2 = document.getElementById('form');

function pigLatin(text) {
  
  const vowels = ['a','e','i','o','u'];
  const usrTxt = text.split(' ');
  const output = [];

  usrTxt.forEach((word) => {
    
    if (vowels.includes(word[0])) {
      

      output.push(word.concat("way"));

    } else if (!vowels.includes(word[0])) {
  
      let cons = "";
      let end = "";
      let count = 0;

      if (word[0] === 'q' && word[1] === 'u'){
        count = 2;
        cons = 'qu';
      } else { 
        for (let i=0; !vowels.includes(word[i]); i++) {
          if (word[i] === 'q') {
            break;
          } else {
            count++;
            cons += word[i];
            console.log(cons)
          }

      }
    }

      end += (word.slice(count++));
      // cons = end.concat(cons + 'ay')
      output.push(end + cons + 'ay')
      console.log(output)


    }
    console.log(output)
    });
  
}

//form2.addEventListener("submit", )