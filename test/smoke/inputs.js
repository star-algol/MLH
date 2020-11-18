const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');



describe('Inputs', function () {

    describe('Inputs are clickable', function () {
        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            browser.maximizeWindow();
        });

            it('TC-014 Name', function () {
                const name = $(sel.name).isClickable();
                expect(name).toEqual(true);
            });

            it('TC-015 Gender HE', function () {
                const gender = $$(sel.gender)[0].isClickable();
                expect(gender).toEqual(true);
            });

            it('TC-016 Gender SHE', function () {
                const gender = $$(sel.gender)[1].isClickable();
                expect(gender).toEqual(true);
            });

            it('TC-017 Gender IT', function () {
                const gender = $$(sel.gender)[2].isClickable();
                expect(gender).toEqual(true);
            });

            it('TC-018 Age', function () {
                const age = $(sel.age).isClickable();
                expect(age).toEqual(true);
            });

            it('TC-019 Story input field', function () {
                const story = $(sel.story).isClickable();
                expect(story).toEqual(true);
            });

            it('TC-020 Create', function () {
                const create = $(sel.submitBtn).isDisplayed();
                expect(create).toEqual(true);
            });

            it('TC-021 Image input field', function () {
                const img = $(sel.imageField).isClickable();
                expect(img).toEqual(true);
            });

            it('TC-022 Image input field Plus', function () {
            const imgPlus = $(sel.placeholderPlus).isClickable();
            expect(imgPlus).toEqual(true);
            });
    });

    describe('Placeholders are correct', function () {
        before(() => {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            browser.maximizeWindow();
        });

            it('TC-023 Plch Name = Hero\'s name', function () {
                const plchName = $(sel.placeholderName).getAttribute("placeholder");
                expect(plchName).toEqual(exp.plchName);
            });

            it('TC-024 Plch Gender HE = he', function () {
            const plchGenderHe = $(sel.placeholderGenderHe).getText();
            expect(plchGenderHe).toEqual(exp.plchGender.he);
            });

            it('TC-025 Plch Gender SHE = she', function () {
            const plchGenderShe = $(sel.placeholderGenderShe).getText();
            expect(plchGenderShe).toEqual(exp.plchGender.she);
            });

            it('TC-026 Plch Gender IT = it', function () {
            const plchGenderIt = $(sel.placeholderGenderIt).getText();
            expect(plchGenderIt).toEqual(exp.plchGender.it);
            });

            it('TC-027 Plch Age = Hero\'s age', function () {
            const plchAge = $(sel.placeholderAge).getAttribute("placeholder");
            expect(plchAge).toEqual(exp.plchAge);
            });

            it('TC-028 Plch Story = Type of the story', function () {
            const plchStory = $(sel.placeholderStoryType).getText();
            expect(plchStory).toEqual(exp.plchStory);
            });

            it('TC-029 Plch Image = drag and drop your image here or browse', function () {
            const plchImage = $(sel.placeholderImage).getText();
            expect(plchImage).toEqual(exp.plchImage);
            });
    });
});
