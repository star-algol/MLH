const sel = require('../../data/selectors.json');
const inputData = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValue4andClick = require('../../helpers/inputValues4andClick');


describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 sre filled in', function () {
            browser.url('');
            inputValues4(inputData.name, inputData.gender.she, inputData.age, inputData.storyType.comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

        // it('TC-015 Gender HE', function () {
        //     const gender = $$(sel.gender)[0].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-016 Gender SHE', function () {
        //     const gender = $$(sel.gender)[1].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-017 Gender IT', function () {
        //     const gender = $$(sel.gender)[2].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-018 Age', function () {
        //     const age = $(sel.age).isDisplayed();
        //     expect(age).toEqual(true);
        // });
        //
        // it('TC-019 Story', function () {
        //     const story = $$(sel.story).isDisplayed();
        //     expect(label).toEqual(true);
        // });
        //
        // it('TC-020 Create', function () {
        //     const create = $$(sel.create).isDisplayed();
        //     expect(create).toEqual(true);
        // });
        // it('TC-021 Create button is clickable after 1-4 sre filled in', function () {
        //     browser.url('');
        //     const inputName = $(sel.name).addValue(inputData.name);
        //     const inputGender = $$(sel.gender)[inputData.gender.she].click();
        //     // const inputGender = $$(sel.gender)[1].click();
        //     const inputAge = $(sel.age).setValue(inputData.age);
        //     const click = $(sel.storyClick).click();
        //     const inputStory = $$(sel.storyType)[6].click();
        //     const create = $(sel.create).isEnabled();
        //     expect(create).toEqual(true);
        // });

    });

    // describe('Placeholders are correct', function () {

    describe('Other path', function () {

        it('TC-000 Gender HE is working', function () {
            browser.url('');
            inputValue4andClick(inputData.name, inputData.gender.she, inputData.age, inputData.storyType.comedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });

        // it('TC-015 Gender HE', function () {
        //     const gender = $$(sel.gender)[0].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-016 Gender SHE', function () {
        //     const gender = $$(sel.gender)[1].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-017 Gender IT', function () {
        //     const gender = $$(sel.gender)[2].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-018 Age', function () {
        //     const age = $(sel.age).isDisplayed();
        //     expect(age).toEqual(true);
        // });
        //
        // it('TC-019 Story', function () {
        //     const story = $$(sel.story).isDisplayed();
        //     expect(label).toEqual(true);
        // });
        //
        // it('TC-020 Create', function () {
        //     const create = $$(sel.create).isDisplayed();
        //     expect(create).toEqual(true);
        // });
        // it('TC-021 Create button is clickable after 1-4 sre filled in', function () {
        //     browser.url('');
        //     const inputName = $(sel.name).addValue(inputData.name);
        //     const inputGender = $$(sel.gender)[inputData.gender.she].click();
        //     // const inputGender = $$(sel.gender)[1].click();
        //     const inputAge = $(sel.age).setValue(inputData.age);
        //     const click = $(sel.storyClick).click();
        //     const inputStory = $$(sel.storyType)[6].click();
        //     const create = $(sel.create).isEnabled();
        //     expect(create).toEqual(true);
        // });

    });

});