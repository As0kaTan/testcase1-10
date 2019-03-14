module.exports = { 
    'tags' : ['testcase3'], 
    'test artsyjewels' : function (browser) { 
        browser 
        .url('https://store.steampowered.com/') // Go to a url 
        .waitForElementVisible('body', 1000) // wait till page loads 
        // .setValue('#input_username', 'As0kaTan1') 
        // .setValue('#input_password', 'Anuar041000') 
        // .click('#login_btn_signin > button > span') 
        // .waitForElementVisible('#error_display', 1000) // wait till page loads  
        // .assert.visible('#error_display') 
        // .click('#link_forgot_password')
        // .waitForElementVisible('body', 1000) // wait till page loads  
        // .assert.visible('#wizard_contents > div > div > a:nth-child(2) > span') 
        // .click('#wizard_contents > div > div > a:nth-child(2) > span')
        // .assert.visible('#forgot_login_search')
        // .setValue('#forgot_login_search', 'As0kaTan1') 
        // .click('#forgot_login_search_form > div.account_recovery_submit > input[type="submit"]')
        // .assert.visible('#wizard_contents > div > a:nth-child(5) > span')
        // .click('#wizard_contents > div > a:nth-child(5) > span')
        // .assert.visible('#global_header > div > div.supernav_container > a:nth-child(1)')
        // .click('#global_header > div > div.supernav_container > a:nth-child(1)')
        // .setValue('#store_nav_search_term', 'Space Engineers')
        // .keys(browser.Keys.ENTER)
        // .assert.visible('#search_result_container > div:nth-child(2) > a:nth-child(2) > div.responsive_search_name_combined > div.col.search_name.ellipsis > p')
        // .click('#search_result_container > div:nth-child(2) > a:nth-child(2) > div.responsive_search_name_combined > div.col.search_name.ellipsis > p')
        // .assert.visible('#game_area_purchase > div:nth-child(1) > div > div.game_purchase_action > div > div.btn_addtocart > a > span')
        // .click('#game_area_purchase > div:nth-child(1) > div > div.game_purchase_action > div > div.btn_addtocart > a > span')
        // .assert.visible('#language_pulldown')
        // .click('#language_pulldown')
        // .assert.visible('#language_dropdown > div > a:nth-child(27)')
        // .click('#language_dropdown > div > a:nth-child(27)')
        // .assert.visible('#language_pulldown')
        // .click('#language_pulldown')
        // .assert.visible('#language_dropdown > div > a:nth-child(23)')
        // .click('#language_dropdown > div > a:nth-child(23)')
        // .assert.visible('supernav_container > a:nth-child(1)')
        // .click('supernav_container > a:nth-child(1)')
        // .assert.visible('#genre_tab > span > a.pulldown_desktop')
        // .click('#genre_tab > span > a.pulldown_desktop')
        // .assert.visible('#frame.with_header > div.responsive_page_content > div.responsive_page_template_content > div.contenthub_page_background > div.page_contenthub_content > div.page_content_ctn > div > div.rightcol.small > div.contenthub_popular_tags > a:nth-child(6) > span')
        // .click('#frame.with_header > div.responsive_page_content > div.responsive_page_template_content > div.contenthub_page_background > div.page_contenthub_content > div.page_content_ctn > div > div.rightcol.small > div.contenthub_popular_tags > a:nth-child(6) > span')
        // .assert.visible('#global_header > div > div.supernav_container > a:nth-child(1)')
        // .click('#global_header > div > div.supernav_container > a:nth-child(1)')
        // .assert.visible('#genre_tab > span > a.pulldown_desktop')
        // .click('#genre_tab > span > a.pulldown_desktop')
        // .assert.visible('body > div.responsive_page_frame.with_header > div.responsive_page_content > div.responsive_page_template_content > div.contenthub_page_background > div.page_contenthub_content > div.page_content_ctn > div > div.rightcol.small > div.contenthub_popular_tags > a:nth-child(2)')
        // .click('body > div.responsive_page_frame.with_header > div.responsive_page_content > div.responsive_page_template_content > div.contenthub_page_background > div.page_contenthub_content > div.page_content_ctn > div > div.rightcol.small > div.contenthub_popular_tags > a:nth-child(2)')
        .assert.visible('#footer > div > div.valve_links > a:nth-child(1)')
        .click('#footer > div > div.valve_links > a:nth-child(1)')
        
        .end(); 
    } 
};