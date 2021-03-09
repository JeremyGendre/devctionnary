describe("User", () => {
  it("should add snippet", () => {
    cy.fixture('user.json').then((user) => {
      cy.visit('/login');
      cy.get('input[formcontrolname="username"]').type(user.username);
      cy.get('input[formcontrolname="password"]').type(user.password);
      cy.get('form').submit();
      cy.contains('Profil').should('be.visible');
  
      cy.visit('/add-snipet');
      cy.get('input[formcontrolname="title"]').type('My snippet');
      cy.get('input[formcontrolname="description"]').type('My snippet description');
      cy.get('input[formcontrolname="content"]').type('<p><strong>My content</strong></p>');
      cy.get('form').submit();
  
      cy.wait(2000);
      cy.visit('/');
      cy.contains('My snippet').should('be.visible');
    });
  });
});