const express = require('express');
const TestCaseRouter = express.Router();
const { TestCasesRepository } = require('../../TestCasesRepository');
const { isTestCaseValid } = require('../validation/validationTestCase')

const testCasesRepository = new TestCasesRepository();

// Define routes for the TestCaseRouter
TestCaseRouter.get('/', (req, res) => {
    res.send(testCasesRepository.getTestCases());
});

TestCaseRouter.post('/', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    if (!isTestCaseValid(title)) {
        res.status(400).send('Test case should have a name, title is required.');
        return;
    };

    const testCase = testCasesRepository.addTestCase(title, description);
    res.send(testCase);
});

// Export the TestCaseRouter
module.exports = TestCaseRouter;
