describe('Table Data Download', function () {
    it('verify Table Data Download', function () {
        cy.visit('table-data-download-demo.html');
        cy.get('[class*="dt-button buttons-copy"]').click();
        // Message after clicking Copy button
        cy.get('.dt-button-info').should('contain', 'Copy to clipboard');
        cy.get('.dt-button-info').should('contain', 'To cancel, click this message or press escape.');
        cy.get('.dt-button-info').click();
        // Click on CSV button
        cy.get('[class*="dt-button buttons-csv"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','CSVfile.csv', 'MyCustomAgentName');
        // Click on Excel button
        cy.get('[class*="dt-button buttons-excel"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','Excelfile.xlsx', 'MyCustomAgentName');
        // Click on PDF button
        cy.get('[class*="dt-button buttons-pdf"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','PDFfile.pdf', 'MyCustomAgentName');
        // Click on Print button
        cy.get('[class*="dt-button buttons-print"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','PrintFile');
        // Sorting by Search & Print
        cy.get('[type="search"]').type('london');
        cy.get('tbody [role="row"]').its('length').should('eq', 6);
        cy.get('[class*="dt-button buttons-print"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','PrintSortingFile0');
        cy.get('[class*="dt-button buttons-copy"]').click();
        // Message after clicking Copy button
        cy.get('.dt-button-info').should('contain', 'Copy to clipboard');
        cy.get('.dt-button-info').should('contain', 'To cancel, click this message or press escape.');
        cy.get('.dt-button-info').click();
        cy.get('[type="search"]').clear();
        cy.get('.paginate_button').contains('2').click();
        cy.get('[class*="dt-button buttons-copy"]').click();
        // Message after clicking Copy button
        cy.get('.dt-button-info').should('contain', 'Copy to clipboard');
        cy.get('.dt-button-info').should('contain', 'To cancel, click this message or press escape.');
        cy.get('.dt-button-info').click();
        cy.get('[type="search"]').type('22');
        cy.get('tbody [role="row"]').its('length').should('eq', 3);
        // Click on CSV button
        cy.get('[class*="dt-button buttons-csv"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','CSVfile0.csv', 'MyCustomAgentName');
        // Click on Excel button
        cy.get('[class*="dt-button buttons-excel"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                            'mydownloads','Excelfile0.xlsx', 'MyCustomAgentName');
        // Sorting by Office
        cy.contains('Office').click();
        cy.get('[class*="dt-button buttons-excel"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','Excelfile1.xlsx', 'MyCustomAgentName');
        cy.get('[type="search"]').clear();
        // Sorting by Salary
        cy.contains('Salary').click();
        // Click on CSV button
        cy.get('[class*="dt-button buttons-csv"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','CSVfile1.csv', 'MyCustomAgentName');
        // Click on Excel button
        cy.get('[class*="dt-button buttons-excel"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                            'mydownloads','Excelfile2.xlsx', 'MyCustomAgentName');
        // Click on PDF button
        cy.get('[class*="dt-button buttons-pdf"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','PDFfile0.pdf', 'MyCustomAgentName');
        // Click on Print button
        cy.get('[class*="dt-button buttons-print"]').click();
        cy.downloadFile('https://www.seleniumeasy.com/test/table-data-download-demo.html#',
                    'mydownloads','PrintFile2');

    });
});