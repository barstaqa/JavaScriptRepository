class TestCasesRepository {
    constructor() {
        this.testCases = [];
        this.suites = [];
        this.currentId = 1;
    }

    getTestCases() {
        return this.testCases;
    }

    getTestSuites() {
        return this.suites;
    }

    getTestCasesBySuite() {
        const testCasesBySuite = {};
        this.testCases.forEach((testCase) => {
            const suiteId = testCase.suiteId;
            const suiteTitle = suiteId ? this.suites.find((suite) => suite.id === suiteId).title : 'Undefined';
            if (!testCasesBySuite[suiteTitle]) {
                testCasesBySuite[suiteTitle] = [];
            }
            testCasesBySuite[suiteTitle].push(testCase);
        });
        return testCasesBySuite;
    }

    addTestCase(title, description, suiteId) {
        const newTestCase = {
            id: this.currentId++,
            title: title,
            description: description,
            suiteId: suiteId,
        };
        this.testCases.push(newTestCase);
        return newTestCase;
    }
    addSuite(title) {
        const newTestSuite = {
            suiteId: this.currentId++,
            title: title,
        }
        this.suites.push(newTestSuite);
        return newTestSuite;
    }

    editTestCase(id, title, description, suiteId) {
        const testCase = this.testCases.find((testCase) => testCase.id === parseInt(id));
        if (!testCase) {
            return null;
        }
        testCase.title = title;
        testCase.description = description;
        testCase.suiteId = suiteId;
        return testCase;
    }

}

module.exports = { TestCasesRepository };
