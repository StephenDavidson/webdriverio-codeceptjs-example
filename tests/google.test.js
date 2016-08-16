Feature('Search');

Before((I) => { // or Background
    I.amOnPage('/');
});

Scenario('for bananas wikipedia article', (I, homePage) => {
    homePage.searchFor('banana wikipedia');
    I.see('Banana - Wikipedia, the free encyclopedia');
});

Scenario('for oranges wikipedia article', (I, homePage) => {
    homePage.searchFor('orange wikipedia');
    I.see('Orange - Wikipedia, the free encyclopedia');
});