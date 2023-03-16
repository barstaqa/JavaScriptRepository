const express = require('express');
const TestCasesBySuitesRouter = express.Router();
const { SuitesRepository } = require('../SuitesRepository/SuitesRepository');

TestCasesBySuitesRouter.get('/', (req, res) => {
    const testCasesRepository = SuitesRepository.getInstance();
    const testCasesBySuite = testCasesRepository.getTestCasesBySuite();
    res.send(testCasesBySuite);
});

module.exports = TestCasesBySuitesRouter;
