import { expect, test} from "vitest";

const { isTestCaseValid } = require('./validationTestCase');

test('empty title is valid', () => {
    const title = '';
    const result = isTestCaseValid(title);
    expect(result).toBe(false);
});

test('title with only spaces is invalid', () => {
    const title = ' ';
    const result = isTestCaseValid(title);
    expect(result).toBe(false);
});

test('title with non-empty string is valid', () => {
    const title = 'Title Test Case';
    const result = isTestCaseValid(title);
    expect(result).toBe(true);
});