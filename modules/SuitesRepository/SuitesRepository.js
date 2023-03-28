const { TestCasesRepository } = require("../TestCasesRepository/TestCasesRepository");

class SuitesRepository {
    static instance;
    constructor() {
        if (SuitesRepository.instance) {
            throw new Error("Use getInstance()");
        } else {
            this.testSuites = [];
            this.currentId = TestCasesRepository.getInstance().currentId;
            SuitesRepository.instance = this;
        }
    }
    static getInstance() {
        if (!SuitesRepository.instance) {
            SuitesRepository.instance = new SuitesRepository();
        }
        return SuitesRepository.instance;
    }
    getTestSuites() {
        return this.testSuites;
    }
    addSuite(title) {
        const newTestSuite = {
            suiteId: this.currentId++,
            title: title,
            cases: [],
        };
        this.testSuites.push(newTestSuite);
        return newTestSuite;
    }
    addTestCase(title, description) {
        const suite = this.testSuites[this.testSuites.length - 1];
        const testCasesRepository = TestCasesRepository.getInstance();
        const newTestCase = testCasesRepository.addTestCase(title, description, suite.suiteId);
        suite.cases.push(newTestCase);
        return newTestCase;
    }
    getTestCasesBySuite(testCases) {
        const testCasesBySuite = [];
        for (const testSuites of this.testSuites) {
            const suiteCases = testCases.filter(
                (testCases) => testCases.suiteId === testSuites.suiteId
            );
            // Create a new array of cases to prevent duplicating suiteId
            const newCases = suiteCases.map(({ suiteId, ...rest }) => rest);

            testCasesBySuite.push({
                suiteId: testSuites.suiteId,
                title: testSuites.title,
                cases: newCases,
            });
        }
        return testCasesBySuite;
    }
}

module.exports = { SuitesRepository };
