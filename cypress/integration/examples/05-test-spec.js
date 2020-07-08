/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My First Test case',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//web tables - selecting the entire second coloumn
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

    const text=$e1.text()
    if(text.includes("Python"))
    {
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
            const priceText=price.text()
            expect(priceText).to.equal('25');
        });
    }
});

});

});