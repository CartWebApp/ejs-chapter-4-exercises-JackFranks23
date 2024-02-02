function reverseArray(arr) {
 let final = [];
  for (let i = arr.length; i > 0; i--) {
    final.push(arr[i-1]);
  }
  return final
}

function reverseArrayInPlace(arr) {
  let final = [];
  for (let i = arr.length-1; i > 0; i--) {
    final.push(arr[i]);
  }
  return final
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]