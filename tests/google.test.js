Feature('Search');

Before((I) => { // or Background
    I.amOnPage('/');
});

Scenario('for bananas wikipedia article', (I) => {
    I.fillField('q', 'bananas wikipedia');
    I.waitForElement('#search', 30);
    I.see('Banana - Wikipedia, the free encyclopedia');
});

Scenario('for oranges wikipedia article', (I) => {
    I.fillField('q', 'oranges wikipedia');
    I.waitForElement('#search', 30);
    I.see('Orange - Wikipedia, the free encyclopedia');
});