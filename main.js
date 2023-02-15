import {TestCasesRepository} from "./TestCasesRepository";

const express = require('express');
const app = express();
const PORT = 9323;

const testCasesRepository = new TestCasesRepository();

app.get('/api/test/cases', (req, res) => {
    const testCases = testCasesRepository.getTestCases();
    res.json(testCases);
});

app.post('/api/test/cases', (req, res) => {
    const { title, description } = req.body;
    const newTestCase = testCasesRepository.addTestCase(title, description);
    res.json(newTestCase);
});

app.listen(
    PORT,
    () => console.log(`server is running on ${PORT}`)
);