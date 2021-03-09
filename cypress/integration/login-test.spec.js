describe("User", () => {
  it("should login user", () => {
    cy.fixture('user.json').then((user) => {
      cy.visit('/login');
      cy.get('input[formcontrolname="username"]').type(user.username);
      cy.get('input[formcontrolname="password"]').type(user.password);
      cy.get('form').submit();

      cy.wait(3000);
      cy.contains('Profil').should('be.visible');
    });
  });
});