/// <reference types="cypress" />
describe("This is a sample test for Cricbuzz team navigation",()=>{

    it("open demo website and update the version option",()=>{
        cy.visit("https://getbootstrap.com/docs/5.0/components/navs-tabs/")
        //find the elements which is collapsed and select a option has "customize" and click it
        cy.get("nav.bd-links button").filter(".collapsed").each(($ele)=>{
            if($ele.text().includes("Customize")){
                cy.get($ele).click();
                return false
            }
            })

            //just for the usage of filer, I took css match with multiple and taking which is collapsed
        cy.get("nav.bd-links button").filter("button:not([class='btn d-inline-flex align-items-center rounded collapsed'])").then(()=>{
            cy.wait(2000)
            cy.get("button#bd-versions").click();
            cy.get("ul.dropdown-menu-end").contains("3.4.1").click();
            cy.title().should('include',"The world’s most popular mobile-first");
        })
    })

})