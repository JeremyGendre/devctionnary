describe("User", () => {
  it("should register user", () => {
    cy.fixture('user.json').then((user) => {
      cy.visit('/login');
      cy.get('input[formcontrolname="username"]').type(user.username);
      cy.get('input[formcontrolname="password"]').type(user.password);
      cy.get('form').submit();
      cy.wait(5000);

      cy.visit('/profile');
      cy.get('button[color="warn"]').click();
      cy.get('button[mat-dialog-close][color="warn"]').click();
      cy.wait(3000);
      cy.contains('Connexion').should('be.visible');
    });
  })
});