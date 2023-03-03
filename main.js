const express = require('express');
const app = express();
const PORT = 9323;
const { TestCasesRepository } = require('./TestCasesRepository');
const { isTestCaseValid } = require('./modules/validation/validationTestCase')
app.use(express.json());

const testCasesRepository = new TestCasesRepository();

app.get('/api/test/cases', (req, res) => {
    res.send(testCasesRepository.getTestCases());
});

app.post('/api/test/cases', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    if (!isTestCaseValid(title)) {
        res.status(400).send('Test case should have a name, title is required.');
        return;
    };

    const testCase = testCasesRepository.addTestCase(title, description);
    res.send(testCase);
});

app.listen(
    PORT,
    () => {
        console.log(`server is running on ${PORT}`)
    });
