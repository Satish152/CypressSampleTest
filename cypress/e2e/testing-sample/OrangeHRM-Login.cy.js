/// <reference types="cypress" />
describe("This is a sample test for Orange HRM page",()=>{

    it("login to the Oramge HRM and verify User login",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.url().should("contain","dashboard");
    })

})