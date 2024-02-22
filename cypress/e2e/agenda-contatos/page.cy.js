/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato a agenda', () => {
        // Colocando dados nos inputs
        cy.get('input[type="text"]').type('Contato Teste')
        cy.get('input[type="email"]').type('ContatoTeste@teste.com')
        cy.get('input[type="tel"]').type("11 2233445566")

        // Criando contato com os dados colocados nos inputs
        cy.get('.adicionar').click()
    })
    it('Deve editar os dados de um contato e deve salvar a edição', () => {
        // Clicando no primeiro botão do primeiro contato
        cy.get('.edit').first().click()
        
        // Removendo dados originais dos inputs e adicionando novos dados
        cy.get('input[type="text"]').clear().type('Contato Teste Editado')
        cy.get('input[type="email"]').clear().type('contatoTesteEditado@teste.com')
        cy.get('input[type="tel"]').clear().type("66 1122334455")

        // Salvando dados novos
        cy.get('.alterar').click()
    })
    it('Deve remover um contato da afenda', () => {
        // Pegando um elemento <ul></ul> e verificando a quantidade
        cy.get('.sc-eDDNvR.cTVgex').then((contatos) => {

            // Armazenando a quantidade
            const numeroTotalDeContatos = contatos.length

            // Removendo um contato
            cy.get('.delete').first().click()
    
            // checando se ele foi removido realmente
            cy.get('.sc-eDDNvR.cTVgex').should('have.length', numeroTotalDeContatos - 1)
        })
    })
})