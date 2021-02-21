describe('third drop-down menu', function () {

    it('verify Table Pagination', function () {
        cy.visit('table-pagination-demo.html');
        cy.get('.next_link').click();
        cy.get('.prev_link').click();
        // Count items length
        cy.get('[style="display: table-row;"]').its('length').should('eq', 5);
        cy.get('.next_link').click();
        // Count items length
        cy.get('[style="display: table-row;"]').its('length').should('eq', 5);
        // Count items length
        cy.get('.next_link').click();
        cy.get('[style="display: table-row;"]').its('length').should('eq', 3);
    });

    it('verify Table Data Search', function () {
        cy.visit('table-search-filter-demo.html');
        cy.get('#task-table-filter').type('Emily John');
        cy.get('#task-table-filter').clear().type('seo tags');
        // Count items
        cy.get('.panel.panel-primary').first()
            .contains('se')
            .then(se => {
                const seCount = Cypress.$(se).length;
                expect(se).to.have.length(seCount);
            });
        cy.get('#task-table-filter').clear().type('in progress');
        // Count items length
        cy.get('[style="display: table-row;"]').its('length').should('eq', 3);
        cy.get('#task-table-filter').clear().type('in progress a');
        cy.contains('No results found');
        cy.get('[class*="btn btn-default"]').click();
        cy.get('[placeholder="#"]').type('3');
        cy.get('.table').last().should('contain', '3');
        cy.get('[placeholder="Username"]').type('ma');
        // Count items length
        cy.get('.table [style="display: table-row;"]').last().its('length').should('eq', 1);
        cy.get('[placeholder="First Name"]').type('b');
        // Count items length
        cy.get('.table [style="display: table-row;"]').its('length').should('eq', 2);
        cy.get('[placeholder="Last Name"]').type('k');
        // Count items length
        cy.get('.table [style="display: table-row;"]').its('length').should('eq', 2);
        cy.get('[placeholder="Last Name"]').type('k');
        cy.contains('No results found');
    });

    it('verify Table Filter', function () {
        cy.visit('table-records-filter-demo.html');
        cy.get('[data-status="pagado"] .star').first().click();
        cy.get('.star.star-checked').should('be.visible');
        cy.get('.ckbox #checkbox1').click({force: true});
        cy.get('.selected').should('be.visible');
        // Filter by Green
        cy.get('.btn-group').contains('Green').click();
        // Filter by Orange
        cy.get('.btn.btn-warning.btn-filter').contains('Orange').click();
        cy.get('.ckbox #checkbox3').click({force: true});
        cy.get('.ckbox #checkbox5').click({force: true});
        cy.get('[data-status="pendiente"] .star').last().click();
        // Filter by Red
        cy.get('.btn-group').contains('Red').click();
        cy.get('[data-status="cancelado"] .star').first().click();
        cy.get('.ckbox #checkbox2').click({force: true});
        cy.get('.btn-group').contains('All').click();

        // Count all tr
        cy.get('.table-container tr').should(($tr) => {
            expect($tr).to.have.length(5)
        });
        // Count star-checked items
        cy.get('.table-container .star.star-checked').should(($tr) => {
            expect($tr).to.have.length(4)
        });
    });

    it('verify Table Sort & Search', function () {
        cy.visit('table-sort-search-demo.html');
        //Sorting by Name
        cy.contains('Name').dblclick();
        cy.contains('Name').should('have.attr', 'aria-label', 'Name: activate to sort column descending');
        //Sorting by Position
        cy.contains('Position').click();
        cy.contains('Position').should('have.attr', 'aria-label', 'Position: activate to sort column descending');
        //Sorting by Office
        cy.contains('Office').click();
        cy.contains('Office').should('have.attr', 'aria-label', 'Office: activate to sort column descending');
        //Sorting by Age
        cy.contains('Age').click();
        cy.contains('Age').should('have.attr', 'aria-label', 'Age: activate to sort column descending');
        //Sorting by Start date
        cy.contains('Start date').click();
        cy.contains('Start date').should('have.attr', 'aria-label', 'Start date: activate to sort column descending');
        //Sorting by Salary
        cy.contains('Salary').click();
        cy.contains('Salary').should('have.attr', 'aria-label', 'Salary: activate to sort column descending');

        //Example length 25
        cy.get('[name="example_length"]').select('25');
        cy.contains('Name').click();
        cy.contains('Name').should('have.attr', 'aria-label', 'Name: activate to sort column descending');
        //Sorting by Position
        cy.contains('Position').click();
        cy.contains('Position').should('have.attr', 'aria-label', 'Position: activate to sort column descending');
        //Sorting by Office
        cy.contains('Office').click();
        cy.contains('Office').should('have.attr', 'aria-label', 'Office: activate to sort column descending');
        //Sorting by Age
        cy.contains('Age').click();
        cy.contains('Age').should('have.attr', 'aria-label', 'Age: activate to sort column descending');
        //Sorting by Start date
        cy.contains('Start date').click();
        cy.contains('Start date').should('have.attr', 'aria-label', 'Start date: activate to sort column descending');
        //Sorting by Salary
        cy.contains('Salary').click();
        cy.contains('Salary').should('have.attr', 'aria-label', 'Salary: activate to sort column descending');

        //Example length 50
        cy.get('[name="example_length"]').select('50');
        cy.contains('Name').click();
        cy.contains('Name').should('have.attr', 'aria-label', 'Name: activate to sort column descending');
        //Sorting by Position
        cy.contains('Position').click();
        cy.contains('Position').should('have.attr', 'aria-label', 'Position: activate to sort column descending');
        //Sorting by Office
        cy.contains('Office').click();
        cy.contains('Office').should('have.attr', 'aria-label', 'Office: activate to sort column descending');
        //Sorting by Age
        cy.contains('Age').click();
        cy.contains('Age').should('have.attr', 'aria-label', 'Age: activate to sort column descending');
        //Sorting by Start date
        cy.contains('Start date').click();
        cy.contains('Start date').should('have.attr', 'aria-label', 'Start date: activate to sort column descending');
        //Sorting by Salary
        cy.contains('Salary').click();
        cy.contains('Salary').should('have.attr', 'aria-label', 'Salary: activate to sort column descending');

        //Example length 100
        cy.get('[name="example_length"]').select('100');
        cy.contains('Name').click();
        cy.contains('Name').should('have.attr', 'aria-label', 'Name: activate to sort column descending');
        //Sorting by Position
        cy.contains('Position').click();
        cy.contains('Position').should('have.attr', 'aria-label', 'Position: activate to sort column descending');
        //Sorting by Office
        cy.contains('Office').click();
        cy.contains('Office').should('have.attr', 'aria-label', 'Office: activate to sort column descending');
        //Sorting by Age
        cy.contains('Age').click();
        cy.contains('Age').should('have.attr', 'aria-label', 'Age: activate to sort column descending');
        //Sorting by Start date
        cy.contains('Start date').click();
        cy.contains('Start date').should('have.attr', 'aria-label', 'Start date: activate to sort column descending');
        //Sorting by Salary
        cy.contains('Salary').click();
        cy.contains('Salary').should('have.attr', 'aria-label', 'Salary: activate to sort column descending');

        //Search sorting
        cy.get('[type="search"]').type('London');
        cy.get('tbody [role="row"]').its('length').should('eq', 7);
        cy.get('[type="search"]').clear().type('Tokyo');
        cy.get('tbody [role="row"]').its('length').should('eq', 4);
        cy.contains('Salary').dblclick();
        cy.contains('Salary').should('have.attr', 'aria-label', 'Salary: activate to sort column descending');

    });
});
