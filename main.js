/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + "x";
  }
  return result;
}

function yellingChars(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + "!";
  }
  return result;
}

function indexedChars(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + i + str[i]

  }
  return result;
}



function numberedChars(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    result = result + "(" + (i + 1) + ")" + str[i]
  }
  return result
}

function exclaim(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char === '?' || char === '.') {
      result += '!'

    } else {
      result += char
    }
  }
  return result
}

function repeatIt(str, n) {
  let result = ''
  for (let i = 0; i < n; i++) {
    result += str
  }
  return result;

}
console.log(repeatIt("louis", 4))

function truncate(str) {
  if (str.length <= 18) {
    return str
  }
  let result = ''
  for (let i = 0; i < 15; i++) {
    result += str[i]
  }
  return result + '...'
}

function emailify(name){
  let firstInitial = "";
  let lastName = "";
  let spaceFound = false;

  for(let i = 0; i < name.length; i++){
    let char = name[i].toLowerCase()
    if(!spaceFound){
      if(i === 0){
        firstInitial = char
      }
      if(char === " "){
        spaceFound = true
      }

    } else{
      lastName += char
    }
  }
  return firstInitial + lastName + ".prsvr@gmail.com"
}
console.log(emailify("Derrick Lewis"))

function reverse(str){
  let result = ""
  for(let i = str.length - 1; i >= 0; i--){
    result += str[i]
  }
  return result
}
// console.log(reverse("derrick"))


function onlyVowels(word){
  let result = ""
  for(let i = 0; i < word.length; i++){
    let char = word[i].toLowerCase()
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
      result += word[i]
    }
  }
  return result
}

//console.log(onlyVowels("Derrick Lewis"))


  










/********************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
