/// <reference types="cypress" />

describe('Testes para agenda de contatos', () => {
    beforeEach(() => cy.visit('https://agenda-contatos-react.vercel.app/'))

    it('Adiciona contato a lista', () => {
        cy.get('.sc-gLDzan > input[type="text"]').type('Nome Teste')
        cy.get('.sc-gLDzan > input[type="email"]').type('teste@teste.com')
        cy.get('.sc-gLDzan > input[type="tel"]').type('00 00000 0000')
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB.eQdhbg.contato:last-child')
            .should('contain', 'Nome Teste')
        cy.screenshot('1 add-contato')
    })

    it('Edita contato adicionado a lista', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato:last-child').find('button.edit').click()
        cy.get('.sc-gLDzan > input[type="text"]').clear().type('Nome Teste 2')
        cy.get('.sc-gLDzan > input[type="email"]').clear().type('teste2@teste.com')
        cy.get('.sc-gLDzan > input[type="tel"]').clear().type('11 11111 1111')
        cy.get('.alterar').click()
        cy.get('.sc-beqWaB.eQdhbg.contato:last-child')
            .should('contain', 'Nome Teste 2')
        cy.screenshot('2 edit-contato')
    })

    it('Deleta contato adicionado a lista', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato:last-child').find('button.delete').click()
        cy.get('.sc-beqWaB.eQdhbg.contato').should('not.contain', 'Teste')
        cy.screenshot('3 delete-contato')
    })
})