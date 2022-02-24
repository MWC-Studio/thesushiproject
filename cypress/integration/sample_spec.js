describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('Should header have text', () => {
    cy.contains('Sushi Experience')
    cy.get("header").should("be.exist");
  })
})