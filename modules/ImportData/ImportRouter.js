const express = require('express');
const ImportRouter = express.Router();
const { TestCasesRepository } = require('../TestCasesRepository/TestCasesRepository');
const { SuitesRepository } = require('../SuitesRepository/SuitesRepository');
ImportRouter.post('/', (req, res) => {
    console.log(req.body);
    const { title, testCases } = req.body;
    const testCasesRepository = TestCasesRepository.getInstance();
    const suitesRepository = SuitesRepository.getInstance();

    const suite = suitesRepository.addSuite(title);

    testCases.forEach(testCase => {
        testCasesRepository.addTestCase(testCase.title, testCase.description, suite.suiteId);
    });

    res.send({ message: "The data has been imported" });
});

module.exports = ImportRouter;