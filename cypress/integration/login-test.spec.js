describe("User", () => {
  it("should login user", () => {
    cy.fixture('user.json').then((user) => {
      // Register.
      cy.visit('/register');
      cy.get('input[formcontrolname="username"]').type(user.username);
      cy.get('input[formcontrolname="password"]').type(user.password);
      cy.get('input[formcontrolname="firstName"]').type(user.firstName);
      cy.get('input[formcontrolname="lastName"]').type(user.lastName);
      cy.get('input[formcontrolname="email"]').type(user.email);
      cy.get('form').submit();

      cy.wait(3000);

      // Login
      cy.visit('/login');
      cy.get('input[formcontrolname="username"]').type(user.username);
      cy.get('input[formcontrolname="password"]').type(user.password);
      cy.get('form').submit();

      cy.wait(3000);
      cy.contains('Profil').should('be.visible');

      // Remove
      cy.visit('/profile');
      cy.get('button[color="warn"]').click();
      cy.get('button[mat-dialog-close][color="warn"]').click();
      cy.wait(3000);
      cy.contains('Connexion').should('be.visible');
    });
  });
});