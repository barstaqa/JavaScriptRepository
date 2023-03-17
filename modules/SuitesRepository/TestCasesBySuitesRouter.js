const express = require('express');
const TestCasesBySuitesRouter = express.Router();
const { SuitesRepository } = require('../SuitesRepository/SuitesRepository');
const {TestCasesRepository} = require("../TestCasesRepository/TestCasesRepository");

TestCasesBySuitesRouter.get('/', (req, res) => {
    const suitesRepository = SuitesRepository.getInstance();
    const testCasesRepository = TestCasesRepository.getInstance();
    const testCasesBySuite = suitesRepository.getTestCasesBySuite(testCasesRepository.getTestCases());
    res.send(testCasesBySuite);
});

module.exports = TestCasesBySuitesRouter;
