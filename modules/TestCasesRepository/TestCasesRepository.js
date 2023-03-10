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
        const testCasesBySuit = [];
        this.suites.forEach((suit) => {
            const testCases = this.testCases.filter((testCase) => testCase.suitId === suit.id);
            const suitObject = { suitId: suit.id, title: suit.title, testCases };
            testCasesBySuit.push(suitObject);
        });
        const testCasesWithoutSuit = this.testCases.filter((testCase) => testCase.suitId === undefined);
        const suitObject = { suitId: undefined, title: 'Undefined', testCases: testCasesWithoutSuit };
        testCasesBySuit.push(suitObject);
        return testCasesBySuit;
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
