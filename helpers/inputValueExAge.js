const sel = require('../data/selectors.json');

function inpValsExptAge (name, gender, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.storyClick).click();
    $(sel.storyClick).waitForDisplayed();
    $$(sel.storyType)[storyType].click();
}

module.exports = inpValsExptAge;