// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1,
     mystery2, mystery3, mystery4, mystery5];

     //Function to check the validation of the card

     // Add your functions below:
const validateCred = arr => {
    let toSum = [];
    let reversedArry = arr.slice().reverse();
    //iterates through arry from farther right to left 

    for (let i = 0; i < reversedArry.length; i++){
      if(i === 0) {
        //multiplying to everyother digit in arry
        toSum.push(reversedArry[i]);
      } else if (i % 2 !== 0) {
       let number = reversedArry[i] * 2
       if(number > 9) {
         number -= 9;

       }
       toSum.push(number)
      } else {
        toSum.push(reversedArry[i]);
      }
    }
    let sum = toSum.reduce((accumelator, currentvalue) => accumelator + currentvalue, 0);
    return sum % 10 === 0;
  }
  //console.log(validateCred([4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]));
  //function to re turn Invalid Card Numbers from the batch
  const findInvalidCards = invalidNumbers => {
    let invalidCards = [];
    for (let i = 0; i < invalidNumbers.length; i++) {
      if(validateCred(invalidNumbers[i]) === false) {
        invalidCards.push(invalidNumbers[i]);
      }
    }
    return invalidCards;
  }
// return function with the name of the credit card provider by iterating through array 
  const idInvalidCardCompanies = invalidCards => {
  
    let cardCompany = []; // Stores CC companies with invalid card numbers
   for (let i = 0; i < invalidCards.length; i++) {
     let firstNumber = parseInt(invalidCards[i][0]);
      if(firstNumber === 3) {
        cardCompany.push('Amex');
      } else if(firstNumber === 4) {
        cardCompany.push('Visa');
      } else if(firstNumber === 5) {
        cardCompany.push('Mastercard');
      } else if(firstNumber === 6) {
        cardCompany.push('Discover');
      } else {
        cardCompany.push('Company not found')
      }
     
  
      
    }
    let uniq = [...new Set(cardCompany)];
    
    return uniq;
  }
  console.log(idInvalidCardCompanies(batch));
  
  console.log(findInvalidCards(batch));
  