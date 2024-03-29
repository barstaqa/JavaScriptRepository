const express = require('express');
const app = express();
const PORT = 9323;
const TestCaseRouter = require('./modules/TestCasesRepository/TestCasesRouter');
const SuitesRouter = require('./modules/SuitesRepository/SuitesRouter');
const TestCasesBySuitesRouter = require('./modules/SuitesRepository/TestCasesBySuitesRouter');
const ImportRouter = require('./modules/ImportData/ImportRouter');
app.use(express.json());
app.use('/api/test/cases', TestCaseRouter);
app.use('/api/test/suites', SuitesRouter);
app.use('/api/test/cases/bySuite', TestCasesBySuitesRouter);
app.use('/api/test/import', ImportRouter);
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});
