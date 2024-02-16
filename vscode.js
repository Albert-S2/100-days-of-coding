


function countNumberOfNinesInNumber(number) {
  let count = 0;

  for(let i = 0; i < number.toString().length; i++) {
    let newNumber = number.toString();
    let digit = newNumber [i];
    if ('9' === digit) {
      count++;
    }
  }
  return count
}
console.log(countNumberOfNinesInNumber(5679959476909)); 

function howManyFours(numbers) {
  let count = 0;

  for(let i = 0; i < numbers.toString().length; i++) {
    let newNumbers = numbers.toString()
    let digits = newNumbers[i];
    if('4' === digits) {
      count++
    }
  } 
  return count
} console.log(howManyFours(46464562342444))

let characters = ["Richard", "John", "Charles", "Henry"]

for(let index = 0; index < characters.length; index++) {
  characters[index] = `${characters[index]} King`

}
console.log(`${characters}`); 


let names = ['Ana', 'Patrick', 'Thomas', 'Julie', 'Kathryn', 'Isabel']; 

for (let i = 0; i < names.length; i++) {
  
  console.log(`Welcome to the team, ${[i]}`); 
}

function applyDiscount(totalAmaunt) {
  let minSpend = 30

  let discount = totalAmaunt * 0.9;

  if(totalAmaunt > minSpend) {
    finalAmaunt = discount;
    return finalAmaunt; 
  } else {
    return totalAmaunt;
  }
}
console.log(`With discount your price is ${applyDiscount(300)}`)