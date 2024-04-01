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












//3. Sum of all numbers in an array

// Annonymous Function:-
/*
var sum = function (arr)
{
    var tot = 0;
    for(var i=0;i<arr.length;i++)
    {
        var tot = tot+arr[i];
        
    }
    return tot;
}
console.log(sum([1,2,3,4,5]))
*/


// IIFE:-
/*
(function (arr)
{
    var tot = 0;
    for(var i=0;i<arr.length;i++)
    {
        var tot = tot+arr[i];
        
    }
    console.log(tot);
})
([1,2,3,4,5]);
*/

// Arrow Function:-
/*
var sum = (arr)=>{
    var tot = 0;
    for(var i=0;i<arr.length;i++)
    {
        var tot = tot+arr[i];
        
    }
    return tot
}
console.log(sum([1,2,3,4,5]));
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
