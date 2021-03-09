describe("User", () => {
  it("should register user", () => {
    cy.fixture('user.json').then((user) => {

      cy.visit('/register');
      cy.get('input[formcontrolname="username"]').type(user.username);
      cy.get('input[formcontrolname="password"]').type(user.password);
      cy.get('input[formcontrolname="firstName"]').type(user.firstName);
      cy.get('input[formcontrolname="lastName"]').type(user.lastName);
      cy.get('input[formcontrolname="email"]').type(user.email);
      cy.get('form').submit();
      cy.contains('Connexion').should('be.visible');
    });
  })
});