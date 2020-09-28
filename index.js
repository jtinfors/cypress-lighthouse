/// <reference types="Cypress" />

Cypress.Commands.add('lighthouse', (url) => {
  cy.exec(`$(npm bin)/lighthouse ${url} --output json`).then(({ stdout }) => {
    const { categories } = JSON.parse(stdout);
    return Object.keys(categories).reduce((curr, key) => {
      return {
        ...curr,
        [key]: categories[key].score
      }
    }, {});
  });
});
