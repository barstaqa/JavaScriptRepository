class TestCasesRepository {
    static instance;
    constructor() {
        if (TestCasesRepository.instance) {
            throw new Error("Use getInstance()");
        } else {
            this.testCases = [];
            this.currentId = 1;
            TestCasesRepository.instance = this;
        }
    }
    static getInstance() {
        if (!TestCasesRepository.instance) {
            TestCasesRepository.instance = new TestCasesRepository();
        }
        return TestCasesRepository.instance;
    }
    getTestCases() {
        return this.testCases;
    }
    addTestCase(title, description, suiteId) {
        const newTestCase = {
            id: this.currentId++,
            title: title,
            description: description,
            suiteId: suiteId,
        };
        console.log(newTestCase); // wyświetl nowy test case
        this.testCases.push(newTestCase);
        return { id: newTestCase.id, title: newTestCase.title };
        console.log(this.testCases); // wyświetl tablicę testCases

    }
    editTestCase(id, title, description, suiteId) {
        const testCase = this.testCases.find(
            (testCase) => testCase.id === parseInt(id)
        );
        testCase.title = title;
        testCase.description = description;
        testCase.suiteId = suiteId;
        return testCase;
    }
}

module.exports = { TestCasesRepository };
