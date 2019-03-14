module.exports = {
    'tags' : ['testcase1'],
    'test E-Commerce Website' : function (browser) {
         browser 
         .url('https://www.artsyjewels.com/') // Go to a url
         .waitForElementVisible('body', 1000) // wait till page loads
         .assert.title('Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels') // Make sure Site title matches
        //  .assert.visible('input[type=text]') 
        //  .setValue('input[type=text]', 'nightwatchjs') // send values
         .click('#header > div.header2.bg-white > div.main-header2 > div > div > div.col-md-6.col-sm-8.col-xs-8 > form > input.lsx-search-field.lsx-done.tt-input')
         .SetValue('#header;[STERLING SILVER ESTHER RING IN CITRINE]')
         .pause(1000)
         .end();
       }
 };