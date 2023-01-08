/* index.js */
import NameVariations from "./name-variations.js";

let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
  let nameVariations = new NameVariations(name.value);
  
  // the try/catch statements are added to allow you and test
  // инструкции try / catch добавлены, чтобы позволить вам и тестировать


  // your code even before you have implemented all the instance methods
  // ваш код еще до того, как вы внедрили все методы экземпляра

  try {
    answer1.textContent = nameVariations.getNumberOfChars();
  } catch (error) { console.log(error) }
console.log(answer1.textContent)
  try {
    answer2.textContent = nameVariations.getLower();
  } catch (error) { console.log(error) }

  try {
    answer3.textContent = nameVariations.getUpper();
  } catch (error) { console.log(error) }
});