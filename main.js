const express = require('express');
const app = express();
const PORT = 9323;

app.use(express.json());
app.use('/api/test/cases', testCasesEndpoint);


app.listen(
    PORT,
    () => {
        console.log(`server is running on ${PORT}`)
    });

