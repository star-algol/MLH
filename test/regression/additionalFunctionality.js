

const sel = require('../../data/selectors.json');
const inputData = require('../../data/testData.json');
const exp = require('../../data/expected.json');
const inputValue4andClick = require('../../helpers/inputValues4andClick');
const findTextAge = require('../../helpers/findTextAge');


describe('Additional functionality', function () {

    describe('Age converts to words', function () {

        it('TC-000 Check age converts to text', function () {
            browser.url('');
            for (let i = 0; i < inputData.testAge.length; i++) {
            inputValue4andClick(inputData.name, inputData.gender.she, inputData.testAge[i], inputData.storyType.comedy);
            let textAge = findTextAge();//wrote helper which will search the exact place where age is placed and return the value there
            //console.log(textAge);
                expect(textAge).toEqual(exp.checkAge[i]);
                $(sel.tryAgain).click();
            }
        });

    });

});