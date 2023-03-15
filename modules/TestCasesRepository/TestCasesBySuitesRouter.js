const express = require('express');
const TestCasesBySuitesRouter = express.Router();
const { TestCasesRepository } = require('./TestCasesRepository');

TestCasesBySuitesRouter.get('/', (req, res) => {
    const testCasesRepository = TestCasesRepository.getInstance();
    const testCasesBySuite = testCasesRepository.getTestCasesBySuite();
    res.send(testCasesBySuite);
});

module.exports = TestCasesBySuitesRouter;
