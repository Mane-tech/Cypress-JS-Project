describe('drop-down menu', function () {
    it('verify first drop-down menu', function () {
       cy.visit('https://www.seleniumeasy.com/test/');
       cy.contains('Input Forms').click();
       cy.get('[title="Close"]').click();
        [
        {submenu: 'Simple Form Demo',
         url: 'basic-first-form-demo.html'},
        {submenu: 'Checkbox Demo',
         url: 'basic-checkbox-demo.html'},
        {submenu: 'Radio Buttons Demo',
         url: 'basic-radiobutton-demo.html'},
        {submenu: 'Select Dropdown List',
         url: 'basic-select-dropdown-demo.html'},
        {submenu: 'Input Form Submit',
         url: 'input-form-demo.html'},
        {submenu: 'Ajax Form Submit',
         url: 'ajax-form-submit-demo.html'},
        {submenu: 'JQuery Select dropdown',
         url: 'jquery-dropdown-search-demo.html'}
         ].forEach(menu => {
           cy.get('.dropdown-menu').should('contain', menu.submenu);
           cy.reload();
           cy.get('.dropdown-menu').contains(menu.submenu).click({force: true});
           cy.url().should('contain', menu.url);
         });
    });


    it('verify second drop-down menu', function () {
        cy.visit('https://www.seleniumeasy.com/test/');
        cy.contains('Date pickers').click();
        // verify second drop-down menu submenu
        [{submenu: 'Bootstrap Date Picker', url: 'bootstrap-date-picker-demo.html'},
         {submenu: 'JQuery Date Picker', url: 'jquery-date-picker-demo.html'},
        ].forEach(menu => {
            cy.get('.dropdown-menu').should('contain', menu.submenu);
            cy.get('.dropdown-menu').contains(menu.submenu).click({force: true});
            cy.url().should('contain', menu.url);
        });
    });


    it('verify third drop-down menu', function () {
        cy.visit('https://www.seleniumeasy.com/test/');
        cy.contains('Table').click();
        //verify third drop-down menu submenu
        [{submenu: 'Table Pagination', url: 'table-pagination-demo.html'},
         {submenu: 'Table Data Search', url:'table-search-filter-demo.html'},
         {submenu: 'Table Filter', url: 'table-records-filter-demo.html'},
         {submenu: 'Table Sort & Search', url: 'table-sort-search-demo.html'},
         {submenu: 'Table Data Download', url: 'table-data-download-demo.html'}
        ].forEach(menu => {
            cy.get('.dropdown-menu').should('contain', menu.submenu);
            cy.get('.dropdown-menu').contains(menu.submenu).click({force: true});
            cy.url().should('contain', menu.url);
        });
    });
});
