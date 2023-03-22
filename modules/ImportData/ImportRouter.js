const express = require('express');
const ImportRouter = express.Router();
const { TestCasesRepository } = require('../TestCasesRepository/TestCasesRepository');
const { SuitesRepository } = require('../SuitesRepository/SuitesRepository');
ImportRouter.post('/', (req, res) => {
    const { suites } = req.body;
    const testCasesRepository = TestCasesRepository.getInstance();
    const suitesRepository = SuitesRepository.getInstance();

    for (const suite of suites) {
        const { title, cases } = suite;
        const newSuite = suitesRepository.addSuite(title);
        for (const testCase of cases) {
            const { title, description } = testCase;
            testCasesRepository.addTestCase(title, description, newSuite.suiteId);
        }
    }

    res.send({ message: "The data has been imported" });
});

module.exports = ImportRouter;