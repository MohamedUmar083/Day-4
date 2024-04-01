//Do the below programs in anonymous function & IIFE & arrow function

//1. Print odd numbers in an array

//Annonymous Function:-
/*var OddNumber = function (arr) {
    let odd = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        odd.push(arr[i]);
      }
    }
    return odd;
  }
  console.log(OddNumber([1,2,3,4,5,6,7,8,9]))*/


// IIFE:-
/*(function (arr) {
    let odd = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        odd.push(arr[i]);
      }
    }
    console.log(odd);
  })
  ([1,2,3,4,5,6,7,8,9])
*/


//Arrow Function:-
/*var odd = (arr) =>{
    let odd = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        odd.push(arr[i]);
      }
    }
    return odd;
  }
  console.log(odd([1,2,3,4,5,6,7,8,9]))
*/












//2.Convert all the strings to title caps in a string array

/*
//Annonymous Function:-
const word = ["yOu kNoW wHo i aM"];
var caps = function (word){
  var wordString = word.toString();
  var lower = wordString.toLowerCase()
  var split = lower.split(" ")
  var total = []
  for(var i=0;i<split.length;i++)
  {
    var capital = split[i].charAt(0).toUpperCase();
    var rem = split[i].slice(1);
    total.push(capital+rem);
  }

  return total.join(" ")
}

console.log(caps(word))
*/

/*
//IIFE Function:-
const word = ["yOu kNoW wHo i aM"];
(function (word){
  var wordString = word.toString();
  var lower = wordString.toLowerCase()
  var split = lower.split(" ")
  var total = []
  for(var i=0;i<split.length;i++)
  {
    var capital = split[i].charAt(0).toUpperCase();
    var rem = split[i].slice(1);
    total.push(capital+rem);
  }

  console.log(total.join(" "));
})(word)
*/


/*
//Arrow Function:-
const word = ["yOu kNoW wHo i aM"];
var caps =  (word)=>{
  var wordString = word.toString();
  var lower = wordString.toLowerCase()
  var split = lower.split(" ")
  var total = []
  for(var i=0;i<split.length;i++)
  {
    var capital = split[i].charAt(0).toUpperCase();
    var rem = split[i].slice(1);
    total.push(capital+rem);
  }

  return total.join(" ")
}

console.log(caps(word))
*/











// 3.Sum of all numbers in an array
/*
//Annonymous Function:-
const array = [1, 2, 3, 4, 5, 6];
var sumArray = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

console.log(sumArray(array));
*/

/*
//IIFE Function:-
(function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
})([1, 2, 3, 4, 5, 6]);
*/

/*
//Arrow Function:-
const array = [1, 2, 3, 4, 5, 6];
var sumArray =  (arr) => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

console.log(sumArray(array));
*/










//4.Return all the prime numbers in an array

/*
//Anonymous Function:-
var getPrimeNumbers = function (arr) {
  var primeNumbers = [];
  for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      if (num > 1) {
          var isPrime = true;
          for (var j = 2; j <= Math.sqrt(num); j++) {
              if (num % j === 0) {
                  isPrime = false;
                  break;
              }
          }
          if (isPrime) {
              primeNumbers.push(num);
          }
      }
  }
  return primeNumbers;
}

const numbers = [1,2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,1,16,17,18,19,20];

console.log(getPrimeNumbers(numbers));
*/


/*
//IIFE Function :-
(function (arr) {
  var primeNumbers = [];
  for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      if (num > 1) {
          var isPrime = true;
          for (var j = 2; j <= Math.sqrt(num); j++) {
              if (num % j === 0) {
                  isPrime = false;
                  break;
              }
          }
          if (isPrime) {
              primeNumbers.push(num);
          }
      }
  }
  console.log(primeNumbers);
})([1,2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,1,16,17,18,19,20]);
*/

/*
//Arrow Function:-
var getPrimeNumbers = (arr) => {
  var primeNumbers = [];
  for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      if (num > 1) {
          var isPrime = true;
          for (var j = 2; j <= Math.sqrt(num); j++) {
              if (num % j === 0) {
                  isPrime = false;
                  break;
              }
          }
          if (isPrime) {
              primeNumbers.push(num);
          }
      }
  }
  return primeNumbers;
}
const numbers = [1,2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,1,16,17,18,19,20];

console.log(getPrimeNumbers(numbers));
*/










//5. Return all the palindromes in an array

/*
// Annonymous Function
const array = ["racecar", "malayalam", "mobile", "port", "sugus"];
var palindrome = function (arr){
  var palind = []
  for(var i =0 ;i<arr.length;i++)
  {
    var revarray = arr[i].split("").reverse().join("");
    if(arr[i]===revarray){
      palind.push(revarray)
    }
  }
return palind;
}

console.log(palindrome(array));

*/

/*
//IIFE Function.
const array = ["racecar", "malayalam", "mobile", "port", "sugus"];
(function (arr){
  palind = []
  for(var i =0 ;i<arr.length;i++)
  {
    var revarray = arr[i].split("").reverse().join("");
    if(arr[i]===revarray){
      palind.push(revarray)
    }
  }
console.log(palind);

})(array);
*/

/*
//Arrow Function
const array = ["racecar", "malayalam", "mobile", "port", "sugus"];
var palindrome = (arr)=>{
  palind = []
  for(var i =0 ;i<arr.length;i++)
  {
    var revarray = arr[i].split("").reverse().join("");
    if(arr[i]===revarray){
      palind.push(revarray)
    }
  }
return palind;
}

console.log(palindrome(array));
*/





//6. Return median of two sorted arrays of the same size.


//Anonymous Function:-
var a1 = [4,2,3,1];
var a2 = [8,6,7,5];

var median = function (arr1,arr2){
  var array = [...arr1,...arr2].sort();
  var length = array.length;
  for(var i=0;i<length;i++)
  {
    if(length%2===0)
    {
      var evenMedian = (array[length/2] + array[length-1]/2)/2;
      return evenMedian;
    }
    else
    {
      var oddMedian = array[Math.floor(length/2)]
      return oddMedian;
    }
  }
  //console.log(array)
}

console.log(median(a1,a2))





//IIFE Function:-
