/// <reference types="Cypress" />

describe('My First Test Suite', function()
{
    it('My First Test case',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //check more reliable than click
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get("input[type=checkbox]").check(['option2','option3']);

        //static dropdown 
        cy.get('select').select('option2').should('have.value','option2');

        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if($e1.text()==="India")
            {
                $e1.click();
            }
        } );

        cy.get('#autocomplete').should('have.value','India');

        //hidden and visible elements
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible');

        //radio buttons
        cy.get("[value=radio2]").check().should('be.checked');

        //pop ups e.g. alert button

    });

});