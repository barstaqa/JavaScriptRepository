const express = require('express');
const TestCaseRouter = express.Router();
const { TestCasesRepository } = require('./TestCasesRepository');
const { isTestCaseValid } = require('./validationTestCase')

const testCasesRepository = new TestCasesRepository();

// Define routes for the TestCaseRouter
TestCaseRouter.get('/', (req, res) => {
    res.send(testCasesRepository.getTestCases());
});
TestCaseRouter.post('/', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const suiteId = req.body.suiteId;
    if (!isTestCaseValid(title)) {
        res.status(400).send('Test case should have a name, title is required.');
        return;
    };

    const testCase = testCasesRepository.addTestCase(title, description, suiteId);
    res.send(testCase);
});
//Check put method
TestCaseRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const suiteId = req.body.suiteId;
    const testCase = testCasesRepository.editTestCase(id, title, description, suiteId);
    if (!testCase) {
        return res.status(404).send(`Test case with ID ${id} not found`);
    }
    res.send(testCase);
});

// Export the TestCaseRouter
module.exports = TestCaseRouter;
