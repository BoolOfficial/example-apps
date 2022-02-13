/// <reference types="cypress" />

const DATA_EXAMPLE = {
  name: 'E2E enabled',
  key: 'E2E_ENABLED',
  value: 'Enabled',
  description: 'DO NOT MODIFY - used for E2E tests',
  id: '3d30848f-718a-454c-8bda-f0484195042c',
  applicationId: 'fa41ca19-2fc0-4bc5-92ee-326b8ade7350',
};

describe('Core JS app', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('JS_APP_URL'));
  });

  describe('getFeatures', () => {
    it('displays a list of features', () => {
      cy.get('#list').should('not.be.empty');
    });

    it('displays all data on a single list item', () => {
      cy.get('#list [test-id="list-item-E2E_ENABLED"]').within(() => {
        cy.get('details').click();

        cy.get('[test-id="list-item-name"]').should(
          'have.text',
          DATA_EXAMPLE.name,
        );

        cy.get('[test-id="list-item-value"]').should(
          'have.text',
          DATA_EXAMPLE.value,
        );

        cy.get('[test-id="details-item-key"]').should(
          'have.text',
          DATA_EXAMPLE.key,
        );

        cy.get('[test-id="details-item-description"]').should(
          'have.text',
          DATA_EXAMPLE.description,
        );

        cy.get('[test-id="details-item-id"]').should(
          'have.text',
          DATA_EXAMPLE.id,
        );

        cy.get('[test-id="details-item-applicationId"]').should(
          'have.text',
          DATA_EXAMPLE.applicationId,
        );
      });
    });
  });

  describe('hasFeature', () => {
    it('will have data', () => {
      cy.get('#tbody tr').should('have.length', 3);
    });

    it('will show the correct values for an ENABLED feature', () => {
      cy.get('[test-id="E2E_ENABLED-expectedValue"]').should(
        'have.text',
        'Enabled',
      );

      cy.get('[test-id="E2E_ENABLED-actualValue"]').should(
        'have.text',
        'Enabled',
      );
    });

    it('will show the correct values for a DISABLED feature', () => {
      cy.get('[test-id="E2E_DISABLED-expectedValue"]').should(
        'have.text',
        'Disabled',
      );

      cy.get('[test-id="E2E_DISABLED-actualValue"]').should(
        'have.text',
        'Disabled',
      );
    });

    it('will show the correct values for a NON_EXISTING feature', () => {
      cy.get('[test-id="NONEXISTENT_FEATURE-expectedValue"]').should(
        'have.text',
        'Disabled',
      );

      cy.get('[test-id="NONEXISTENT_FEATURE-actualValue"]').should(
        'have.text',
        'Disabled',
      );
    });
  });
});
