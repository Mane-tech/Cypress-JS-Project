describe('first drop-down menu', function () {

    it('verify Simple Form Demo', function () {
        // Simple Form Demo
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
        // NaN
        cy.get('#displayvalue').should('contain', 'NaN');
    });

    it('verify Checkbox Demo', function () {
        cy.visit('basic-checkbox-demo.html');
        cy.get('#isAgeSelected').check();
        // Success Message
        cy.get('#txtAge').should('contain', 'Success - Check box is checked');
        cy.get('[value="Check All"]').click();
        cy.get('[value="Uncheck All"]').click();
        cy.contains( 'Option 1').click();
        cy.contains('Option 3').click();
        cy.contains('Option 4').click();
        // Unchecked 3 options
        cy.get('[value="Uncheck All"]').click();
    });

    it('verify Radio Buttons Demo', function () {
        cy.visit('basic-radiobutton-demo.html');
        cy.get('[value="Female"]').check();
        // Female value is checked
        cy.get('[value="Female"]').should('be.checked');
        cy.get('#buttoncheck').click();
        cy.contains("Radio button 'Female' is checked").should('be.visible');
        cy.get('[value="Male"]').check();
        cy.get('[value="5 - 15"]').check();
        // 5 - 15 value is checked
        cy.get('[value="5 - 15"]').should('be.checked');
        cy.contains('Get values').click();
        cy.contains('Sex : Male Age group: 5 - 15').should('be.visible');
    });

    it('verify Select Dropdown List', function () {
        cy.visit('basic-select-dropdown-demo.html');
        cy.get('#select-demo').select('Tuesday');
        // Tuesday value is selected
        cy.contains('Day selected :- Tuesday').should('be.visible');
        cy.get('#select-demo').select('Friday');
        // Friday value is selected
        cy.contains('Day selected :- Friday').should('be.visible');
        cy.get('#multi-select').select('New York');
        cy.get('[value="Print First"]').click();
        // New York option is selected message
        cy.contains('First selected option is : New York').should('be.visible');
        cy.get('[value="Print All"]').click();
        cy.contains('Options selected are : New York').should('be.visible');
        cy.get('#multi-select').select('California');
        cy.get('[value="Print First"]').click();
        // California option is first selected message
        cy.contains('First selected option is : California').should('be.visible');
        cy.get('[value="Print All"]').click();
        // California options are all selected message
        cy.contains('Options selected are : California').should('be.visible');
        cy.reload();
        cy.get('[value="Print First"]').click();
        cy.contains('First selected option is : undefined').should('be.visible');
        cy.get('[value="Print All"]').click();
        cy.contains('Options selected are :').should('be.visible');
    });

    it('verify Input Form Submit', function () {
        cy.visit('input-form-demo.html');
        // Fill all fields
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
        // Fill all fields except one
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
        // Message for first field
        cy.contains('Please supply your first name').should('be.visible');

        //Run uncaught exception
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message)
            done()
        });
        return false
    });

    it('verify Ajax Form Submit', function () {
        cy.visit('ajax-form-submit-demo.html');
        cy.get('[name="title"]').type('John Smith');
        cy.get('#description').type('Ajax Form Submit with Loading icon');
        cy.get('[name="btn-submit"]').click();
    });

    it('verify JQuery Select dropdown', function () {
        cy.visit('jquery-dropdown-search-demo.html');
        cy.get('.select2-selection__arrow').first().click();
        cy.get('.select2-search.select2-search--dropdown').type('J');
        cy.get('[role="treeitem"]').click();
        // Japan option is visible
        cy.get('[title="Japan"]').should('contain', 'Japan');
        cy.get('.select2-search__field').click().type('Ma');
        cy.get('[role="tree"]').contains('Maryland').click();
        // Maryland option is visible
        cy.get('.select2-selection__choice').should('be.visible');
        cy.get('.select2-search__field').click().type('A');
        cy.get('[role="tree"]').contains('Arizona').click();
        // Arizona option is visible
        cy.get('.select2-selection__choice').should('be.visible');
        cy.get('[title="American Samoa"]').click();
        cy.get('[role="textbox"]').last().type('p');
        cy.get('.select2-results__options').contains('Puerto Rico').click();
        // Puerto Rico option is visible
        cy.get('[title="Puerto Rico"]').should('be.visible');
        cy.get('[title="Puerto Rico"]').click();
        // Guam option is disable
        cy.contains('Guam').should('be.disabled');
        cy.get('[name="files"]').select('Java').should('have.value', 'jquery');
        cy.get('.select2-selection__choice__remove').first().click();
        cy.get('.select2-selection__choice__remove').last().click();
        cy.get('[name="files"]').select('Ruby').should('have.value', 'jqueryui');

    });
});