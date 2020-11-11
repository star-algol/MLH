const sel = require('../data/selectors.json');

function inputValueExAge (name, gender, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.storyClick).click();
    $$(sel.storyType)[storyType].click();
}

module.exports = inputValueExAge();