const express = require('express');
const app = express();
const PORT = 9323;
const TestCaseRouter = require('./modules/routes/TestCasesRouter');

app.use(express.json());
app.use('/api/test/cases', TestCaseRouter);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});
