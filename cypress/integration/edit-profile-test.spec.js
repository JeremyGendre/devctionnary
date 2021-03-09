describe("User", () => {
  it("should edit user profile", () => {
    cy.fixture('user.json').then((user) => {
      cy.visit('/login');
      cy.get('input[formcontrolname="username"]').type(user.username);
      cy.get('input[formcontrolname="password"]').type(user.password);
      cy.get('form').submit();
      cy.contains('Profil').should('be.visible');
      cy.visit('/modify-profile');
      cy.wait(2000);
  
      cy.get('textarea[formcontrolname="biography"').clear();
      cy.get('textarea[formcontrolname="biography"').type('I like trains');
      cy.get('input[formcontrolname="password"').type(user.password);
      cy.get('form').submit();
  
      cy.wait(3000);
      cy.contains('I like trains').should('be.visible');
    });
  });
});