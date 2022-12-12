/// <reference types="cypress" />

describe('generate password form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="password"]').as('password');
    cy.get('[data-cy="passwordStrengthText"]').as('passwordStrengthText');
    cy.get('[data-cy="passwordLengthSlider"]').as('passwordLengthSlider');
    cy.get('[data-cy="passwordLengthText"]').as('passwordLengthText');
    cy.get('[data-cy="passwordUpperCheckbox"]').as('passwordUpperCheckbox');
    cy.get('[data-cy="passwordLowerCheckbox"]').as('passwordLowerCheckbox');
    cy.get('[data-cy="passwordNumbersCheckbox"]').as('passwordNumbersCheckbox');
    cy.get('[data-cy="passwordSymbolsCheckbox"]').as('passwordSymbolsCheckbox');
    cy.get('[data-cy="generatePasswordButton"]').as('generatePasswordButton');
    cy.get('[data-cy="copyPasswordButton"]').as('copyPasswordButton');
    cy.get('[data-cy="passwordMeterBarOne"]').as('passwordMeterBarOne');
    cy.get('[data-cy="passwordMeterBarTwo"]').as('passwordMeterBarTwo');
    cy.get('[data-cy="passwordMeterBarThree"]').as('passwordMeterBarThree');
    cy.get('[data-cy="passwordMeterBarFour"]').as('passwordMeterBarFour');
  });

  it('inital password loaded, with a score of weak, form defaults active', () => {
    cy.get('@password').should('have.length', 8);
    cy.get('@passwordStrengthText').should('have.text', 'TOO WEAK!');

    cy.get('@passwordLengthText').should('have.text', '8');
    cy.get('@passwordUpperCheckbox').should('be.checked');
    cy.get('@passwordLowerCheckbox').should('be.checked');
    cy.get('@passwordNumberCheckbox').should('not.be.checked');
    cy.get('@passwordSymbolsCheckbox').should('not.be.checked');
  });

  it('no password options selected, no password generated', () => {
    cy.get('@passwordUpperCheckbox').click();
    cy.get('@passwordLowerCheckbox').click();
    cy.get('@generatePasswordButton').should('have.attr', 'disabled');
  });

  it('adjust password length', () => {
    cy.get('@passwordLengthSlider')
      .as('range')
      .invoke('val', 14)
      .trigger('change');
    cy.get('@passwordLengthText').should('contain.text', '14');

    cy.get('@generatePasswordButton').click();
    cy.get('@password').should('have.length', 14);
  });

  it('too weak password strength meter', () => {
    cy.get('@generatePasswordButton').click();
    cy.get('@passwordStrengthText').should('contain.text', 'TOO WEAK!');

    cy.get('@passwordMeterBarOne').should(
      'have.css',
      'background-color',
      '#F64A4A'
    );
    cy.get('@passwordMeterBarTwo').should(
      'have.css',
      'background-color',
      'transparent'
    );
    cy.get('@passwordMeterBarThree').should(
      'have.css',
      'background-color',
      'transparent'
    );
    cy.get('@passwordMeterBarFour').should(
      'have.css',
      'background-color',
      'transparent'
    );
  });

  it('weak password strength meter', () => {
    cy.get('@passwordLengthSlider')
      .as('range')
      .invoke('val', 14)
      .trigger('change');

    cy.get('@generatePasswordButton').click();
    cy.get('@passwordStrengthText').should('contain.text', 'WEAK');

    cy.get('@passwordMeterBarOne').should(
      'have.css',
      'background-color',
      '#FB7C58'
    );
    cy.get('@passwordMeterBarTwo').should(
      'have.css',
      'background-color',
      '#FB7C58'
    );
    cy.get('@passwordMeterBarThree').should(
      'have.css',
      'background-color',
      'transparent'
    );
    cy.get('@passwordMeterBarFour').should(
      'have.css',
      'background-color',
      'transparent'
    );
  });

  it('medium password strength meter', () => {
    cy.get('@passwordLengthSlider')
      .as('range')
      .invoke('val', 14)
      .trigger('change');
    cy.get('@passwordNumbersCheckbox').click();

    cy.get('@generatePasswordButton').click();
    cy.get('@passwordStrengthText').should('contain.text', 'MEDIUM');

    cy.get('@passwordMeterBarOne').should(
      'have.css',
      'background-color',
      '#F8CD65'
    );
    cy.get('@passwordMeterBarTwo').should(
      'have.css',
      'background-color',
      '#F8CD65'
    );
    cy.get('@passwordMeterBarThree').should(
      'have.css',
      'background-color',
      '#F8CD65'
    );
    cy.get('@passwordMeterBarFour').should(
      'have.css',
      'background-color',
      'transparent'
    );
  });

  it('strong password strength meter', () => {
    cy.get('@passwordLengthSlider')
      .as('range')
      .invoke('val', 20)
      .trigger('change');
    cy.get('@passwordNumbersCheckbox').click();
    cy.get('@passwordSymbolsCheckbox').click();

    cy.get('@generatePasswordButton').click();
    cy.get('@passwordStrengthText').should('contain.text', 'STRONG');

    cy.get('@passwordMeterBarOne').should(
      'have.css',
      'background-color',
      '#A4FFAF'
    );
    cy.get('@passwordMeterBarTwo').should(
      'have.css',
      'background-color',
      '#A4FFAF'
    );
    cy.get('@passwordMeterBarThree').should(
      'have.css',
      'background-color',
      '#A4FFAF'
    );
    cy.get('@passwordMeterBarFour').should(
      'have.css',
      'background-color',
      '#A4FFAF'
    );
  });

  it('password text copied to clipboard', () => {
    cy.get('@copyPasswordButton')
      .click()
      .then(() => {
        navigator.clipboard.readText().then((clipText) => {
          cy.get('@password').should('contain.text', clipText);
        });
      });
  });
});
