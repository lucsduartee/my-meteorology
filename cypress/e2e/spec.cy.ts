describe('Happy path', () => {
  it('search city successfully', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="cypress-search-input"]')
      .should('exist')
      .type('Lorena');

    cy.get('[data-testid="cypress-search-input"]')
      .should('have.attr', 'value')
      .and('equal', 'Lorena');

    cy.get('[data-testid="cypress-search-button"]')
     .should('exist')
     .and('contain.text', 'Consultar')
     .click();

    cy.intercept("GET", "https://api.openweathermap.org/*", {
      fixture: 'openWeather.json',
    }).as('openWeatherRequest');

    cy.intercept("GET", "https://api.hgbrasil.com/weather/*", {
      fixture: 'hgBrasil.json',
    }).as('hgBrasilRequest');

    cy.get('[data-testid="cypress-city-name"]')
      .should('exist')
      .and('contain.text', 'Cidade: Lorena');
  });
});

describe('When Open Weather not founds an city', () => {
  it('shows alert', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="cypress-search-input"]')
      .should('exist')
      .type('notACity');

    cy.get('[data-testid="cypress-search-input"]')
      .should('have.attr', 'value')
      .and('equal', 'notACity');

    cy.get('[data-testid="cypress-search-button"]')
     .should('exist')
     .and('contain.text', 'Consultar')
     .click();

    cy.intercept("GET", "https://api.openweathermap.org/*",[]).as('openWeatherRequest');

    cy.on('window:alert',(t)=>{
      expect(t).to.contains('Cidade não encontrada');
   })

    cy.get('[data-testid="cypress-city-name"]')
      .should('not.exist');
  });
});

describe('When Open Weather encounters an error', () => {
  it('displays an error message', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="cypress-search-input"]')
      .should('exist');

    cy.get('[data-testid="cypress-search-button"]')
      .should('exist')
      .and('contain.text', 'Consultar')
      .click();

    cy.intercept("GET", "https://api.openweathermap.org/*", {
      statusCode: 500,
    }).as('openWeatherRequest');

    cy.get('[data-testid="cypress-error-message"]')
      .should('exist')
      .and('contain.text', 'Ocorreu um erro');
  });
});
