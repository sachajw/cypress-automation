/// <reference types="Cypress" />

describe('API Test', function()
{
    it('API POST',function(){
        cy.request('http://216.10.245.166/Library/Addbook.php', 
        {
            "name":"Learn Appium Automation with Java",
            "isbn":"bcdsss",
            "aisle":"22s7",
            "author":"John Foe"
        }).then(function(Response)
    {
      expect(Response.body).to.have.property("Msg","successfully added")
      expect(Response.status).to.eq(200)  
    })
})
});