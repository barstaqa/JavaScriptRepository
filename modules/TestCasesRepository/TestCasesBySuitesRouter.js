const express = require('express');
const TestCasesBySuitesRouter = express.Router();
const { TestCasesRepository } = require('./TestCasesRepository');

const testCasesRepository = new TestCasesRepository();
TestCasesBySuitesRouter.get('/', (req, res) => {
    const testCasesBySuite = testCasesRepository.getTestCasesBySuite();
    res.send(testCasesBySuite);
});

module.exports = TestCasesBySuitesRouter;
