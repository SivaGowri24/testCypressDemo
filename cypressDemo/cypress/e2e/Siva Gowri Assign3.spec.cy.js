describe('functionsAssignment',()=>{
 
    // Create a function named logWelcome that logs: "Welcome to Cypress Training!"

    it('functionAssign',()=>{
      function logWelcome(){
       return('Welcome to Cypress Training!');
    }
	cy.log(logWelcome());
    })
	
	        
// Write a function expression named printUserEmail that takes an email and logs it.

    it('FunctionExpression',()=>{
        const printUserEmail=function(Email){
            return(Email);
         
        }
      cy.log(printUserEmail('QA.test@endava.com'));
        })
 
 // Create an arrow function that takes three numbers and returns their multiplication.

    it('Arrowfunction',()=>{
        const Multiplication = (i,j,k) =>{
         return (i*j*k);
		
        }
      cy.log(Multiplication(5,10,100));
        })
		})