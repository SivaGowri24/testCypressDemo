// Declare a let variable and update it.

describe ('Declare let Variable and update', () => {

  let name = 'Gowri';
    it('let variable', () => { 
      name = 'Siva Gowri';
      cy.log(name);
})
// and 
let a = 1;
it('update', () => {  
      a = a + 1;
      cy.log(a);

})

})

// Try reassigning a const variable — what happens?

describe ('Try reassigning a const variable', () => {
const b = 1;
it.skip('Reassign const', () => {  

      b = b + 1; // If we reassign a const variable the error "Assignment to constant variable." is shown
      cy.log(b+1);
})


const arr1 = [1,2,3];
it('Reassign const array', () => {  // Try reassigning a const variable — what happens?
  
      for(let k=0; k<arr1.length; k++){ 
        // If we reassign a const variable the error "Assignment to constant variable." is shown
      cy.log(arr1[k]+1);
      //we cannot reassign the the variable itself but if the const has an object/array we can update
      }
})

})


//Create an array of 5 numbers and sum them using a loop

describe ('Array of 5 No.s and their Sum', () => {

const arr = [2, 13, 24, 29, 30]; 
let Sum = 0;
it('Sum', () => {  
for(let i=0; i<arr.length; i++){ 
      Sum = Sum + arr[i]; 
}
      cy.log(Sum);
})
})


// Write a function that returns "Even" or "Odd" for a number.

// First Method using for Loop

describe ('Return Even or Odd using for Loop', () => {

let a = 15;
it('Return Even or Odd', () => {  
for(let a = 1;a<=10;a++){
if (a%2 == 0){
    cy.log( a + " - Even Number");
    }
    else{
        cy.log( a + " - Odd Number");
    }
  }
})
})

// or Second Method 

describe ('Even or Odd number', () => {

let a = 15;
it('Even or Odd', () => {  
if (a%2 == 0){
    cy.log( a + " - Even Number");
    }
    else{
        cy.log( a + " - Odd Number");
  }
})
})


// Loop through numbers 1–10 and print only even numbers.

// First Method using for loop

describe ('Print Even Numbers using for loop', () => {

it('Print Even No. using for loop', () => {  
for(let p = 1;p<=10;p++){
if (p%2 == 0){
    cy.log( p + " - Even Number");
    }
    
  }
})
})

// or Second Method using while loop

describe ('Print Even Numbers using while loop', () => {

let a = 2;
it('Print Even No using while loop', () => {  
while(a<=10){
if (a%2 == 0){
    cy.log( a + " - Even Number");
    }
    a++;
  }
})
})