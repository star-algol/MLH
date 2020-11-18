const sel = require('../../data/selectors.json');
const inputData = require('../../data/testData.json');
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4AndClick = require('../../helpers/inputValues4andClick');
const path = require('path');


describe('Checking the main functionality', function () {

    describe('Happy path', function () {
        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            browser.maximizeWindow();
        });

        it('TC-030 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            inputValues4(inputData.name, inputData.gender.she, inputData.age, inputData.storyType.comedy);
            const create = $(sel.submitBtn).isEnabled();
            expect(create).toEqual(true);
        });

    });

    describe('Other path', function () {
        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            browser.maximizeWindow();
        });

        it('TC-031 Gender HE is working', function () {
            browser.url('');
            inputValues4AndClick(inputData.name, inputData.gender.she, inputData.age, inputData.storyType.comedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });



        it.only('TC-032 Uploads photo', function () {
            browser.url('');
           inputValues4(inputData.name, inputData.gender.it, inputData.age, inputData.storyType.comedy);
           const filePath = path.join(__dirname, '../../data/iu.png');
           const imgPath = browser.uploadFile(filePath);
           browser.execute(function() {
               document.getElementsByTagName('input')[6].style.display = "block";
           });
           $(sel.imageInput).waitForDisplayed();
           $(sel.imageInput).setValue(imgPath);
           browser.pause(5000);
           $(sel.submitBtn).doubleClick();
            browser.pause(8000);
            $(sel.tryAgain).click();

        });

    });

});