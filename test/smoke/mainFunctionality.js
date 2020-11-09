const sel = require('../../data/selectors.json');
const inputData = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValue4andClick = require('../../helpers/inputValues4andClick');
const path = require('path');


describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 sre filled in', function () {
            browser.url('');
            inputValues4(inputData.name, inputData.gender.she, inputData.age, inputData.storyType.comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });

    });

    describe('Other path', function () {

        // it('TC-030 Gender HE is working', function () {
        //     browser.url('');
        //     inputValue4andClick(inputData.name, inputData.gender.she, inputData.age, inputData.storyType.comedy);
        //     const btn = $(sel.tryAgain).isDisplayed();
        //     expect(btn).toEqual(true);
        // });
        //
        // it('TC-031 Create button is clickable after 1-4 are filled in', function () {
        //     browser.url('');
        //     const inputName = $(sel.name).addValue(inputData.name);
        //     // const inputGender = $$(sel.gender)[inputData.gender.she].click();
        //     const inputGender = $$(sel.gender)[1].click();
        //     const inputAge = $(sel.age).setValue(inputData.age);
        //     const click = $(sel.storyClick).click();
        //     const inputStory = $$(sel.storyType)[6].click();
        //     const create = $(sel.create).isEnabled();
        //     expect(create).toEqual(true);
        // });

        it('TC-032 Uploads photo', function () {
           inputValues4(inputData.name, inputData.gender.it, inputData.age, inputData.storyType.comedy);
          const filePath = path.join(__dirname, '../../data/photoMignon.jpg');
           const imgPath = browser.uploadFile(filePath);
           $(sel.imageInput).waitForDisplayed();
           browser.pause(5000);
           $(sel.imageInput).setValue(imgPath);
           browser.pause(5000);
           $(sel.create).click();
           browser.pause(5000);
            //const filePath = path.join(__dirname, '../smoke/DSC_2702.jpeg');

        });

    });

});