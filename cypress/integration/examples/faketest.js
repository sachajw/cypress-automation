/// <reference types="Cypress" />

const { delay } = require("cypress/types/bluebird");

describe('API fake Test', function()
{
    it('My FirstTest case',function(){
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.server()

        cy.route(
            {
                method: 'PUT',
                url: 'comments/*',
                status: 404,
                response: {
                    error : "comment does not exist"
                },
                delay: 1000
}).as('UpdateComment')

cy.get('.network-put').click()
cy.get('.network-put-comment').should('contain',"comment does not exist");

});

});