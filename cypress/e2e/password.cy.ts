/// <reference types="cypress" />

const hexToRgb = (hex: string) => {
  const rValue = parseInt(hex.substring(0, 2), 16);
  const gValue = parseInt(hex.substring(2, 4), 16);
  const bValue = parseInt(hex.substring(4), 16);
  return `rgb(${rValue}, ${gValue}, ${bValue})`;
};

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
    cy.get('@password').invoke('text').should('have.length', 8);
    cy.get('@passwordStrengthText').should('have.text', 'TOO WEAK!');

    cy.get('@passwordLengthText').should('have.text', '8');
    cy.get('@passwordUpperCheckbox').find('input').should('be.checked');
    cy.get('@passwordLowerCheckbox').find('input').should('be.checked');
    cy.get('@passwordNumbersCheckbox').find('input').should('not.be.checked');
    cy.get('@passwordSymbolsCheckbox').find('input').should('not.be.checked');
  });

  it('no password options selected, no password generated', () => {
    cy.get('@passwordUpperCheckbox').click();
    cy.get('@passwordLowerCheckbox').click();
    cy.get('@generatePasswordButton').should('have.attr', 'disabled');
  });

  it('adjust password length', () => {
    cy.get('@passwordLengthSlider').focus();
    cy.get('@passwordLengthSlider').realType(
      '{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}'
    );
    cy.get('@passwordLengthSlider').trigger('change');
    cy.get('@passwordLengthText').should('contain.text', '14');

    cy.get('@generatePasswordButton').click();
    cy.get('@password').invoke('text').should('have.length', 14);
  });

  it('too weak password strength meter', () => {
    cy.get('@generatePasswordButton').click();
    cy.get('@passwordStrengthText').should('contain.text', 'TOO WEAK!');

    cy.get('@passwordMeterBarOne').should(
      'have.css',
      'background-color',
      hexToRgb('F64A4A')
    );
    cy.get('@passwordMeterBarTwo').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    );
    cy.get('@passwordMeterBarThree').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    );
    cy.get('@passwordMeterBarFour').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    );
  });

  it('weak password strength meter', () => {
    cy.get('@passwordLengthSlider').focus();
    cy.get('@passwordLengthSlider').realType(
      '{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}'
    );
    cy.get('@passwordLengthSlider').trigger('change');

    cy.get('@generatePasswordButton').click();
    cy.get('@passwordStrengthText').should('contain.text', 'WEAK');

    cy.get('@passwordMeterBarOne').should(
      'have.css',
      'background-color',
      hexToRgb('FB7C58')
    );
    cy.get('@passwordMeterBarTwo').should(
      'have.css',
      'background-color',
      hexToRgb('FB7C58')
    );
    cy.get('@passwordMeterBarThree').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    );
    cy.get('@passwordMeterBarFour').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    );
  });

  it('medium password strength meter', () => {
    cy.get('@passwordLengthSlider').focus();
    cy.get('@passwordLengthSlider').realType(
      '{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}'
    );
    cy.get('@passwordNumbersCheckbox').click();

    cy.get('@generatePasswordButton').click();
    cy.get('@passwordStrengthText').should('contain.text', 'MEDIUM');

    cy.get('@passwordMeterBarOne').should(
      'have.css',
      'background-color',
      hexToRgb('F8CD65')
    );
    cy.get('@passwordMeterBarTwo').should(
      'have.css',
      'background-color',
      hexToRgb('F8CD65')
    );
    cy.get('@passwordMeterBarThree').should(
      'have.css',
      'background-color',
      hexToRgb('F8CD65')
    );
    cy.get('@passwordMeterBarFour').should(
      'have.css',
      'background-color',
      'rgba(0, 0, 0, 0)'
    );
  });

  it('strong password strength meter', () => {
    cy.get('@passwordLengthSlider').focus();
    cy.get('@passwordLengthSlider').realType(
      '{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}{rightarrow}'
    );
    cy.get('@passwordNumbersCheckbox').click();
    cy.get('@passwordSymbolsCheckbox').click();

    cy.get('@generatePasswordButton').click();
    cy.get('@passwordStrengthText').should('contain.text', 'STRONG');

    cy.get('@passwordMeterBarOne').should(
      'have.css',
      'background-color',
      hexToRgb('A4FFAF')
    );
    cy.get('@passwordMeterBarTwo').should(
      'have.css',
      'background-color',
      hexToRgb('A4FFAF')
    );
    cy.get('@passwordMeterBarThree').should(
      'have.css',
      'background-color',
      hexToRgb('A4FFAF')
    );
    cy.get('@passwordMeterBarFour').should(
      'have.css',
      'background-color',
      hexToRgb('A4FFAF')
    );
  });

  it.skip('password text copied to clipboard', () => {
    cy.get('@copyPasswordButton')
      .click()
      .then(() => {
        navigator.clipboard.readText().then((clipText) => {
          cy.get('@password').should('contain.text', clipText);
        });
      });
  });
});
