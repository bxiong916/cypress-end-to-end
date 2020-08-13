describe('Testing form inputs', () => { // you can use context instead of describe
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("adding text to inputs and submits the form", () => {
        // create test for name
        cy.get("[data-cy=name]")
        .type("Bill")
        .should("have.value", "Test");

        // create test for email
        cy.get("[data-cy=email]")
        .type("xiong.bill@yahoo.com")
        .should("have.value", "xiong.bill@yahoo.com");

        // create test for textarea
        cy.get("[data-cy=motivation]")
        .type("I want to help")
        .should("have.value", "I want to help");

        // create test for select
        cy.get("[data-cy=positions]")
        .select("Tabling")
        .should("have.value", "Tabling");

        // create test for checkbox
        cy.screenshot("my-name-of-image");
        cy.get("[data-cy=terms]")
        .check()
        .should("be.checked");

        // create test for button
        cy.get("[data-cy=submit]")
        .click();
    });
});