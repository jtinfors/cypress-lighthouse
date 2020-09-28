/// <reference types="Cypress" />

Cypress.Commands.add('lighthouse', (url) => {
  cy.exec(`$(npm bin)/lighthouse ${url} --output json`).then(({ stdout }) => {
    const { categories } = JSON.parse(stdout);
    console.log('categories => ', categories)
    const data = Object.keys(categories).reduce((curr, key) => {
      return {
        ...curr,
        [key]: categories[key].score
      }
    }, {});
    console.log('data => ', data)
    return data;
  });
});
