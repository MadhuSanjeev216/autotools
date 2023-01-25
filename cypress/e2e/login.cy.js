
describe('Login header text should be Login to Autotools', () => {
    it('verify header', () => {
        cy.visit('/autotools').then( () => {
            cy.task('log', 'Opened the url');
            cy.contains('h1','Login to Auto Tools').should('be.visible');
            cy.task('log', 'validated the header');
        })
    });
    it('verify form fields', () => {
        cy.task('log', 'in the verify form it block')
        // validate email fields
        cy.get('label[for="j_username"]')
            .should('be.visible')
            .should('have.text', 'Email');
        cy.get('ul li').should('have.length', 1).eq(0).should('have.text', 'Login');
        cy.get('label[class="checkbox"]')
              .should('have.text','  Remember me\n\t\t\t\t\t')
           // .contains('normalize-space(text)','Remember me\n\t\t\t\t\t');
        cy.get('input[type="checkbox"]').check();
    })
    it('verify the placeholders in the form', () => {
        cy.task('log','Verify placholders');
        cy.get('input[placeholder="Email"]').should('be.visible');
        cy.get('input[placeholder="Password"]').should('be.visible');
    })
    it('Verify valid credentials will login the user successfully', () => {
        cy.task('log','Verify valid credentials');
        cy.get('input[name="j_username"]').type('testuserone@kubecloudsinc.com');
        cy.get('input[name="j_password"]').type('Testing1');
        cy.contains('button', 'Sign in').click();
        cy.task('log','validated the credentials');
        cy.task('log','new page loaded');
    })
})