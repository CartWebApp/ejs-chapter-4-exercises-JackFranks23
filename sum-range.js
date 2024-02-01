function range(start, end, step = 1) {
   start = Math.min(1);
   end = Math.max(10);
   numbers = [start,end]
  for (let i=numbers[0]; i<= numbers[1]; i++) {
    numbers.push(i)
  }
  return numbers;
}

function sum(numbers) {
  let total = 0;
  for(let i=0; i < numbers.length ; i++){
   total += numbers[i]
  }
  return total;

}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
