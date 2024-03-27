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


