const inpValAge = require('../../helpers/inputValueExAge');
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const inputData = require('../../data/testData.json');

describe('Age', function () {

    describe('Age input accepts 1 to 12 symbols', function () {
        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            browser.maximizeWindow();
        });

        it('TC-030 Check age input field accepts 12 symbols', function () {
            browser.url('');
            inpValAge(inputData.name, inputData.gender.it, inputData.storyType.comedy);
            const heroAge = new Array(12).fill("5").join('');
            $(sel.age).setValue(heroAge);
            browser.pause(2000);
            expect($(sel.age).getValue()).toEqual(exp.heroAge["12sym"]);
            $(sel.submitBtn).click();
        });

        it('TC-031 Check age input field accepts 1 symbol', function () {
            inpValAge(inputData.name, inputData.gender.it, inputData.storyType.comedy);
            $(sel.age).setValue(inputData.heroAge["1sym"]);
            browser.pause(2000);
            expect($(sel.age).getValue()).toEqual(exp.heroAge["1sym"]);
            $(sel.submitBtn).click();
        });

        it('TC-032 Check age input field accepts 4 symbol', function () {
            inpValAge(inputData.name, inputData.gender.it, inputData.storyType.comedy);
            $(sel.age).setValue(inputData.heroAge["4sym"]);
            browser.pause(2000);
            expect($(sel.age).getValue()).toEqual(exp.heroAge["4sym"]);
            $(sel.submitBtn).click();
        });

    });

});