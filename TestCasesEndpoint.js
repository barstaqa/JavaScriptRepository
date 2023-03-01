const express = require('express');
const router = express.Router();
const {TestCasesRepository} = require("./TestCasesRepository");

const testCasesRepository = new TestCasesRepository();

router.get('/api/test/cases', (req, res) => {
    res.send(testCasesRepository.getTestCases());
});

const isTestCaseValid = (title) => {
    return !title && title.trim()
}
router.post('/api/test/cases', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    if (isTestCaseValid(title)) {
        res.status(400).send('Test case should have a name, title is required.');
        return;
    } else if (/^ +$/.test(title)) {
        res.status(400).send('Test case should have a name, title cannot contain only spaces')
    };

    const testCase = testCasesRepository.addTestCase(title, description);
    res.send(testCase);
});

module.exports = router;