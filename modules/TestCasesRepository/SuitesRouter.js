const express = require('express');
const SuitesRouter = express.Router();
const { TestCasesRepository } = require('./TestCasesRepository');

SuitesRouter.get('/', (req, res) => {
    const testCasesRepository = TestCasesRepository.getInstance();
    res.send(testCasesRepository.getTestSuites());
});

SuitesRouter.post('/', (req, res) => {
    const testCasesRepository = TestCasesRepository.getInstance();
    const title = req.body.title;
    let testSuite;
    if (title) {
        testSuite = testCasesRepository.addSuite(title);
    } else {
        testSuite = testCasesRepository.addSuite();
    }
    res.send(testSuite);
});

module.exports = SuitesRouter;
