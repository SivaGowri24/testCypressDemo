describe ('Functions', () => {

    it('Test', () => { 
        function Multiply(a,b){
        return a*b;
        }
        cy.log(Multiply(3,'s'))
        //Multiply();
    })

    it('Test', () => { 
        function Add(c,d){
        return c+d;
        }
        cy.log(Add(3,'q'))
        //Multiply();
    })

})