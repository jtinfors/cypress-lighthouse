l// <reference types="Cypress" />

Cypress.Commands.add('lighthouse', (url, options) => {
  cy.exec(`$(npm bin)/lighthouse ${url} --output json`, options).then(({ stdout }) => {
    const { categories } = JSON.parse(stdout);
    return Object.keys(categories).reduce((curr, key) => {
      return {
        ...curr,
        [key]: categories[key].score
      }
    }, {});
  });
});
