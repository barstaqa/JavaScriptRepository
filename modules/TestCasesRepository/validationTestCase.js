const isTestCaseValid = (title) => {
    return !!title && !!title.trim();
};

module.exports = { isTestCaseValid };