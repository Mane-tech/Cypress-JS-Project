describe('second drop-down menu', function () {

    it('verify Table Pagination submenu', function () {
        cy.visit('bootstrap-date-picker-demo.html');
        cy.get('[placeholder="dd/mm/yyyy"]').click();
        cy.get('.day').contains('25').click();
        cy.get('[placeholder="Start date"]').click();
        cy.get('.day').contains('14').click();
        cy.get('[placeholder="End date"]').click();
        cy.get('.day').contains('25').click();
    });

    it('verify Table Data Search submenu', function () {
        cy.visit('jquery-date-picker-demo.html');
        cy.get('#from').click();
        cy.get('.ui-state-default').contains('11').click();
        cy.get('#to').click();
        cy.get('.ui-state-default').contains('19').click();
    });
});