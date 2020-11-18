const inpValAge = require('../../helpers/inputValueExAge');
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const inputData = require('../../data/testData.json');


describe('Age negative', function () {

    describe('Age input can not accept 0 or 13+ symbols', function () {
        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            browser.maximizeWindow();
        });
        function clearCombo(input){
            input.click();
            browser.keys(["\uE009" + "a", "\uE017", "\ue000"]);
        }

        it('TC-040 Check age input field can not accept 13+ symbols', function () {
            inpValAge(inputData.name, inputData.gender.it, inputData.storyType.comedy);
            const heroAge = new Array(13).fill("5").join('');
            $(sel.age).setValue(heroAge);
            browser.pause(2000);
            expect($(sel.age).getValue()).toEqual(exp.heroAge["13sym"]);

            browser.pause(2000);
            expect($(sel.ageErrUnreal).isExisting());
            const submitBtn = $(sel.submitBtn);
            expect(submitBtn).toBeDisabled();
        });

        it('TC-041 Check age input field can not accept no symbols', function () {
            const age = $(sel.age);
            clearCombo(age);
            const heroAge = '';
            age.setValue(heroAge);
            expect (age.getValue()).toEqual(exp.heroAge["0sym"]);
            browser.pause(2000);
            expect($(sel.ageErrUnreal).isExisting());
            const submitBtn = $(sel.submitBtn);
            expect(submitBtn).toBeDisabled();
        });
        //
        // it('TC-032 Check age input field accepts 4 symbol', function () {
        //     inpValAge(inputData.name, inputData.gender.it, inputData.storyType.comedy);
        //     $(sel.age).setValue(inputData.heroAge);
        //     browser.pause(2000);
        //     expect($(sel.age).getValue()).toEqual(exp.heroAge["4sym"]);
        //     $(sel.submitBtn).click();
        // });

    });

});