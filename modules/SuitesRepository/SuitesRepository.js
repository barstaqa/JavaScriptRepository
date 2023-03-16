const { TestCaseRepository } = require("../TestCasesRepository/TestCasesRepository");

class SuitesRepository {
    static instance;
    constructor() {
        if (SuitesRepository.instance) {
            throw new Error("Use getInstance()");
        } else {
            this.testSuites = [];
            this.currentId = TestCaseRepository.getInstance().currentId;
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
        };
        this.testSuites.push(newTestSuite);
        return newTestSuite;
    }
    getTestCasesBySuite(testCases) {
        const testCasesBySuite = [];
        for (const testSuites of this.testSuites) {
            const suiteCases = testCases.filter(
                (testCases) => testCases.suiteId === testSuites.suiteId
            );
            testCasesBySuite.push({
                suiteId: testSuites.suiteId,
                title: testSuites.title,
                cases: suiteCases,
            });
        }
        return testCasesBySuite;
    }
}

module.exports = { SuitesRepository };
