const express = require('express');
const app = express();
const PORT = 9323;
const TestCaseRouter = require('./modules/TestCasesRepository/TestCasesRouter');

app.use(express.json());
app.use('/api/test/cases', TestCaseRouter);
// API suits
app.use('/api/test/suites', TestCaseRouter);
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});
