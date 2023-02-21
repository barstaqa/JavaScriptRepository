class TestCasesRepository {
    constructor() {
        this.testCases = [];
        this.currentId = 1;
    }

    getTestCases() {
        return this.testCases;
    }

    addTestCase(title, description) {
        const newTestCase = {
            id: this.currentId++,
            title: title,
            description: description,
        };
        this.testCases.push(newTestCase);
        return newTestCase;
    }
}

module.exports = { TestCasesRepository };
