class TestCasesRepository {
    static instance;
    constructor() {
        if (TestCasesRepository.instance) {
            throw new Error('Use getInstance()')
        }
        else {
            this.testCases = [];
            this.testSuites = [];
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
        this.testCases.push(newTestCase);
        return { id: newTestCase.id, title: newTestCase.title };
    }

    editTestCase(id, title, description, suiteId) {
        const testCase = this.testCases.find((testCase) => testCase.id === parseInt(id));
        testCase.title = title;
        testCase.description = description;
        testCase.suiteId = suiteId;
        return testCase;
    }
    getTestSuites() {
        return this.testSuites;
    }
    addSuite(title = undefined) {
        const newTestSuite = {
            suiteId: this.currentId++,
            title: title,
        }
        this.testSuites.push(newTestSuite);
        return newTestSuite;
    }
    getTestCasesBySuite() {
        const testCasesBySuite = [];
        for (const testSuites of this.testSuites) {
            const suiteCases = this.testCases.filter((testCases) => testCases.suiteId === testSuites.suiteId);
            testCasesBySuite.push({
                suiteId: testSuites.suiteId,
                title: testSuites.title,
                cases: suiteCases,
            });
        }
        return testCasesBySuite;
    }
}

module.exports = { TestCasesRepository };
