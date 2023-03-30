const express = require('express');
const TestCaseRouter = express.Router();
const { TestCasesRepository } = require('../TestCasesRepository/TestCasesRepository');
const { isTestCaseValid } = require('../TestCasesRepository/validationTestCase')

// Define routes for the TestCaseRouter
TestCaseRouter.get('/', (req, res) => {
    const testCasesRepository = TestCasesRepository.getInstance();
    res.send(testCasesRepository.getTestCases());
});
TestCaseRouter.post('/', (req, res) => {
    const testCasesRepository = TestCasesRepository.getInstance();
    const title = req.body.title;
    const description = req.body.description;
    const suiteId = req.body.suiteId;
    if (!isTestCaseValid(title)) {
        res.status(400).send('Test case should have a name, title is required.');
        return;
    };
    if (!suiteId) {
        res.status(400).send('Test case should belong to a suite, suiteId is required.');
        return;
    };

    const testCase = testCasesRepository.addTestCase(title, description, suiteId);
    res.send(testCase);
});
//Check put method
TestCaseRouter.put('/:id', (req, res) => {
    const testCasesRepository = TestCasesRepository.getInstance();
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const suiteId = req.body.suiteId;
    const testCase = testCasesRepository.editTestCase(id, title, description, suiteId);
    if (!testCase.id) {
        return res.status(404).send(`Test case with ID ${id} not found`);
    }
    res.send(testCase);
});

// Export the TestCaseRouter
module.exports = TestCaseRouter;
