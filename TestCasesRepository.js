export class TestCasesRepository {
    constructor() {
        this.testCases = [];
        this.currentId = 1;
    }

    getTestCases() {
        return this.testCases;
    }

    addTestCase(title, description) {
        const newTestCase = {
            title: title,
            description: description,
            id: this.currentId
        };
        this.testCases.push(newTestCase);
        this.currentId++;
        return newTestCase;
    }
}