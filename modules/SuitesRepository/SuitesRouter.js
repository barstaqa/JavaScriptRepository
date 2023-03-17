const express = require('express');
const SuitesRouter = express.Router();
const { SuitesRepository } = require('../SuitesRepository/SuitesRepository');

SuitesRouter.get('/', (req, res) => {
    const testSuitesRepository = SuitesRepository.getInstance();
    res.send(testSuitesRepository.getTestSuites());
});

SuitesRouter.post('/', (req, res) => {
    const testSuitesRepository = SuitesRepository.getInstance();
    const title = req.body.title;
    const testSuite = testSuitesRepository.addSuite(title);
    res.send(testSuite);
});

module.exports = SuitesRouter;
