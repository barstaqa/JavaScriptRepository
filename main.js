const express = require('express');
const app = express();
const PORT = 9323;
const TestCaseRouter = require('./modules/TestCasesRepository/TestCasesRouter');
const SuitesRouter = require('./modules/TestCasesRepository/SuitesRouter');
const TestCasesBySuitesRouter = require('./modules/TestCasesRepository/TestCasesBySuitesRouter')
app.use(express.json());
app.use('/api/test/cases', TestCaseRouter);
app.use('/api/test/suites', SuitesRouter);
app.use('/api/test/cases/bySuite', TestCasesBySuitesRouter);
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});
