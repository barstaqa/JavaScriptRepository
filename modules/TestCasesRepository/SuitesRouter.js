const express = require('express');
const SuitesRouter = express.Router();
const { TestCasesRepository } = require('./TestCasesRepository');

const testCasesRepository = new TestCasesRepository();

SuitesRouter.get('/', (req, res) => {
    res.send(testCasesRepository.getTestSuites());
});

SuitesRouter.post('/', (req, res) => {
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
