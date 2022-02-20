describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })
  it('Should header have text', () => {
    cy.contains('Best Sushi Roll')
    cy.get("header").should("be.exist");
  })
})