describe('drop-down menu', function () {
    it('verify first drop-down menu', function () {
       cy.visit('https://www.seleniumeasy.com/test/');
       cy.contains('Input Forms').click();
        //verify third drop-down menu submenu and url
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

        //Simple Form Demo
        cy.visit('basic-first-form-demo.html');
        cy.get('[title="Close"]').click();
        cy.get('[placeholder="Please enter your Message"]').type('The best');
        cy.get('#get-input [type="button"]').click();
        cy.get('#display').should('contain', 'The best');
        cy.get('#sum1').type('48');
        cy.get('#sum2').type('75');
        cy.get('#gettotal [type="button"]').click();
        cy.get('#displayvalue').should('contain', '123');
        cy.get('#sum1').clear().type('h');
        cy.get('#sum2').clear().type('i');
        cy.get('#gettotal [type="button"]').click();
        cy.get('#displayvalue').should('contain', 'NaN');

        //Checkbox Demo
        cy.visit('basic-checkbox-demo.html');
        cy.get('#isAgeSelected').check();
        cy.get('#txtAge').should('contain', 'Success - Check box is checked');
        cy.get('[value="Check All"]').click();
        cy.get('[value="Uncheck All"]').click();
        cy.contains( 'Option 1').click();
        cy.contains('Option 3').click();
        cy.contains('Option 4').click();
        cy.get('[value="Uncheck All"]').click();

        //Radio Buttons Demo
        cy.visit('basic-radiobutton-demo.html');
        cy.get('[value="Female"]').check();
        cy.get('#buttoncheck').click();
        cy.contains("Radio button 'Female' is checked").should('be.visible');
        cy.get('[value="Male"]').check();
        cy.get('[value="5 - 15"]').check();
        cy.contains('Get values').click();
        cy.contains('Sex : Male Age group: 5 - 15').should('be.visible');

        //Select Dropdown List
        cy.visit('basic-select-dropdown-demo.html');
        cy.get('#select-demo').select('Tuesday');
        cy.contains('Day selected :- Tuesday').should('be.visible');
        cy.get('#select-demo').select('Friday');
        cy.contains('Day selected :- Friday').should('be.visible');
        cy.get('#multi-select').select('New York');
        cy.get('[value="Print First"]').click();
        cy.contains('First selected option is : New York').should('be.visible');
        cy.get('[value="Print All"]').click();
        cy.contains('Options selected are : New York').should('be.visible');
        cy.get('#multi-select').select('California');
        cy.get('[value="Print First"]').click();
        cy.contains('First selected option is : California').should('be.visible');
        cy.get('[value="Print All"]').click();
        cy.contains('Options selected are : California').should('be.visible');
        cy.reload();
        cy.get('[value="Print First"]').click();
        cy.contains('First selected option is : undefined').should('be.visible');
        cy.get('[value="Print All"]').click();
        cy.contains('Options selected are :').should('be.visible');

        //Input Form Submit
        cy.visit('input-form-demo.html');
        cy.get('[name="first_name"]').type('John');
        cy.get('[name="last_name"]').type('Smith');
        cy.get('[name="email"]').type('testtest@gmail.com');
        cy.get('[name="phone"]').type('9998887777');
        cy.get('[name="address"]').type('4185  Harron Drive');
        cy.get('[name="city"]').type('Baltimore');
        cy.get('[name="state"]').select('Maryland');
        cy.get('[name="zip"]').type('21202');
        cy.get('[name="website"]').type('https://www.seleniumeasy.com/test');
        cy.get('[value="no"]').check();
        cy.get('[name="comment"]').type('Project Description, Project Description, Project Description');
        cy.get('.col-md-4 [type="submit"]').click();
        cy.reload();
        cy.get('.col-md-4 [type="submit"]').click();
        cy.get('[name="last_name"]').type('Smith');
        cy.get('[name="email"]').type('testtest@gmail.com');
        cy.get('[name="phone"]').type('9998887777');
        cy.get('[name="address"]').type('4185  Harron Drive');
        cy.get('[name="city"]').type('Baltimore');
        cy.get('[name="state"]').select('Maryland');
        cy.get('[name="zip"]').type('21202');
        cy.get('[name="website"]').type('https://www.seleniumeasy.com/test');
        cy.get('[value="no"]').check();
        cy.get('[name="comment"]').type('Project Description, Project Description, Project Description');
        cy.contains('Please supply your first name').should('be.visible');

        //Ajax Form Submit
        cy.visit('ajax-form-submit-demo.html');
        cy.get('[name="title"]').type('John Smith');
        cy.get('#description').type('Ajax Form Submit with Loading icon');
        cy.get('[name="btn-submit"]').click();

        //JQuery Select dropdown
        cy.visit('jquery-dropdown-search-demo.html');
        cy.get('.select2-selection__arrow').first().click();
        cy.get('.select2-search.select2-search--dropdown').type('J');
        cy.get('[role="treeitem"]').click();
        cy.get('[title="Japan"]').should('contain', 'Japan');
        cy.get('.select2-search__field').click().type('Ma');
        cy.get('[role="tree"]').contains('Maryland').click();
        cy.get('.select2-selection__choice').should('be.visible');
        cy.get('.select2-search__field').click().type('A');
        cy.get('[role="tree"]').contains('Arizona').click();
        cy.get('.select2-selection__choice').should('be.visible');
        cy.get('[title="American Samoa"]').click();
        cy.get('[role="textbox"]').last().type('p');
        cy.get('.select2-results__options').contains('Puerto Rico').click();
        cy.get('[title="Puerto Rico"]').should('contain', 'Puerto Rico');
        cy.get('[name="files"]').select('Java').should('have.value', 'jquery');
        cy.get('.select2-selection__choice__remove').first().click();
        cy.get('.select2-selection__choice__remove').last().click();
        cy.get('[name="files"]').select('Ruby').should('have.value', 'jqueryui');

        //Run uncaught exception
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message)
            done()
        });
        return false
    });


    it('verify second drop-down menu', function () {
        cy.visit('https://www.seleniumeasy.com/test/');
        cy.contains('Date pickers').click();
        // verify second drop-down menu submenu
        [{submenu: 'Table Pagination'},
         {submenu: 'Table Data Search'},
        ].forEach(menu => {
            cy.get('.dropdown-menu').should('contain', menu.submenu);
        });

        // Table Pagination
        cy.visit('bootstrap-date-picker-demo.html');
        cy.url().should('contain', 'bootstrap-date-picker-demo.html');
        cy.get('[placeholder="dd/mm/yyyy"]').click();
        cy.get('.day').contains('25').click();
        cy.get('[placeholder="Start date"]').click();
        cy.get('.day').contains('14').click();
        cy.get('[placeholder="End date"]').click();
        cy.get('.day').contains('25').click();

        // Table Data Search
        cy.visit('jquery-date-picker-demo.html');
        cy.url().should('contain', 'jquery-date-picker-demo.html');
        cy.get('#from').click();
        cy.get('.ui-state-default').contains('11').click();
        cy.get('#to').click();
        cy.get('.ui-state-default').contains('19').click();

    });


    it('verify third drop-down menu', function () {
        cy.visit('https://www.seleniumeasy.com/test/');
        cy.contains('Table').click();
        //verify third drop-down menu submenu
        [{submenu: 'Table Pagination'},
         {submenu: 'Table Data Search'},
         {submenu: 'Table Filter'},
         {submenu: 'Table Sort & Search'},
         {submenu: 'Table Data Download'}
        ].forEach(menu => {
            cy.get('.dropdown-menu').should('contain', menu.submenu);
        });

        //Table Pagination
        cy.visit('table-pagination-demo.html');
        cy.url().should('contain', 'table-pagination-demo.html');
        cy.get('.next_link').click();
        cy.get('.prev_link').click();
        cy.get('[style="display: table-row;"]').its('length').should('eq', 5);
        cy.get('.next_link').click();
        cy.get('[style="display: table-row;"]').its('length').should('eq', 5);
        cy.get('.next_link').click();
        cy.get('[style="display: table-row;"]').its('length').should('eq', 3);

        //Table Data Search
        cy.visit('table-search-filter-demo.html');
        cy.url().should('contain', 'table-search-filter-demo.html');
        cy.get('#task-table-filter').type('Emily John');
        cy.get('#task-table-filter').clear().type('seo tags');
        cy.get('.panel.panel-primary').first()
            .contains('se')
            .then(se => {
                const seCount = Cypress.$(se).length;
                expect(se).to.have.length(seCount);
            });
        cy.get('#task-table-filter').clear().type('in progress');
        cy.get('[style="display: table-row;"]').its('length').should('eq', 3);
        cy.get('#task-table-filter').clear().type('in progress a');
        cy.contains('No results found');
        cy.get('[class*="btn btn-default"]').click();
        cy.get('[placeholder="#"]').type('3');
        cy.get('.table').last().should('contain', '3');
        cy.get('[placeholder="Username"]').type('ma');
        cy.get('.table [style="display: table-row;"]').last().its('length').should('eq', 1);
        cy.get('[placeholder="First Name"]').type('b');
        cy.get('.table [style="display: table-row;"]').its('length').should('eq', 2);
        cy.get('[placeholder="Last Name"]').type('k');
        cy.get('.table [style="display: table-row;"]').its('length').should('eq', 2);
        cy.get('[placeholder="Last Name"]').type('k');
        cy.contains('No results found');

        //Table Filter
        cy.visit('table-records-filter-demo.html');
        cy.url().should('contain', 'table-records-filter-demo.html');
        cy.get('[data-status="pagado"] .star').first().click();
        cy.get('.star.star-checked').should('be.visible');
        cy.get('.ckbox #checkbox1').click({force: true});
        cy.get('.selected').should('be.visible');
        cy.get('.btn-group').contains('Green').click();
        cy.get('.btn.btn-warning.btn-filter').contains('Orange').click();
        cy.get('.ckbox #checkbox3').click({force: true});
        cy.get('.ckbox #checkbox5').click({force: true});
        cy.get('[data-status="pendiente"] .star').last().click();
        cy.get('.btn-group').contains('Red').click();
        cy.get('[data-status="cancelado"] .star').first().click();
        cy.get('.ckbox #checkbox2').click({force: true});
        cy.get('.btn-group').contains('All').click();

        cy.get('.table-container tr').should(($tr) => {
            expect($tr).to.have.length(5)
        });
        cy.get('.table-container .star.star-checked').should(($tr) => {
            expect($tr).to.have.length(4)
        });

        //Table Sort & Search
        cy.visit('table-sort-search-demo.html');
        cy.url().should('contain', 'table-sort-search-demo.html');
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

        //Table Data Download
        cy.visit('table-data-download-demo.html');
        cy.url().should('contain', 'table-data-download-demo.html');
        cy.get('[class*="dt-button buttons-copy"]').click();
        cy.get('.dt-button-info').should('contain', 'Copy to clipboard');
        cy.get('.dt-button-info').should('contain', 'To cancel, click this message or press escape.');
        cy.get('.dt-button-info').click();
        cy.get('[class*="dt-button buttons-csv"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','CSVfile.csv', 'MyCustomAgentName');
        cy.get('[class*="dt-button buttons-excel"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','Excelfile.xlsx', 'MyCustomAgentName');
        cy.get('[class*="dt-button buttons-pdf"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','PDFfile.pdf', 'MyCustomAgentName');
        cy.get('[class*="dt-button buttons-print"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','PrintFile');
        cy.get('[type="search"]').type('london');
        cy.get('tbody [role="row"]').its('length').should('eq', 6);
        cy.get('[class*="dt-button buttons-print"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','PrintSortingFile0');
        cy.get('[class*="dt-button buttons-copy"]').click();
        cy.get('.dt-button-info').should('contain', 'Copy to clipboard');
        cy.get('.dt-button-info').should('contain', 'To cancel, click this message or press escape.');
        cy.get('.dt-button-info').click();
        cy.get('[type="search"]').clear();
        cy.get('.paginate_button').contains('2').click();
        cy.get('[class*="dt-button buttons-copy"]').click();
        cy.get('.dt-button-info').should('contain', 'Copy to clipboard');
        cy.get('.dt-button-info').should('contain', 'To cancel, click this message or press escape.');
        cy.get('.dt-button-info').click();
        cy.get('[type="search"]').type('22');
        cy.get('tbody [role="row"]').its('length').should('eq', 3);
        cy.get('[class*="dt-button buttons-csv"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','CSVfile0.csv', 'MyCustomAgentName');
        cy.get('[class*="dt-button buttons-excel"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','Excelfile0.xlsx', 'MyCustomAgentName');
        cy.contains('Office').click();
        cy.get('[class*="dt-button buttons-excel"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','Excelfile1.xlsx', 'MyCustomAgentName');
        cy.get('[type="search"]').clear();
        cy.contains('Salary').click();
        cy.get('[class*="dt-button buttons-csv"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','CSVfile1.csv', 'MyCustomAgentName');
        cy.get('[class*="dt-button buttons-excel"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','Excelfile2.xlsx', 'MyCustomAgentName');
        cy.get('[class*="dt-button buttons-pdf"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','PDFfile0.pdf', 'MyCustomAgentName');
        cy.get('[class*="dt-button buttons-print"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#','mydownloads','PrintFile2');

    });
});
