

const express = require('express');
const app = express();
const PORT = 9323;
const { TestCasesRepository } = require('./TestCasesRepository');

app.use(express.json());

app.get('/api/test/cases', (req, res) => {
    const testCases = new TestCasesRepository();
    testCases.getTestCases();
    res.json(testCases);
});

app.post('/api/test/cases', (req, res) => {
    const { title, description } = req.body;
    const newTestCase = new TestCasesRepository();
    newTestCase.addTestCase(title, description);
    res.json(newTestCase);
});

app.listen(
    PORT,
    () => console.log(`server is running on ${PORT}`)
);