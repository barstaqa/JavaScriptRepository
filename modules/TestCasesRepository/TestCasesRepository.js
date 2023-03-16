class TestCaseRepository {
    static instance;
    constructor() {
        if (TestCaseRepository.instance) {
            throw new Error("Use getInstance()");
        } else {
            this.testCases = [];
            this.currentId = 1;
            TestCaseRepository.instance = this;
        }
    }
    static getInstance() {
        if (!TestCaseRepository.instance) {
            TestCaseRepository.instance = new TestCaseRepository();
        }
        return TestCaseRepository.instance;
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

module.exports = { TestCaseRepository };
