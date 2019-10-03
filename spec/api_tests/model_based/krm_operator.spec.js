const { generateTestCases } = require('./roles.actions');
const role = 'Krm Operator';
const testCases = generateTestCases(role);


describe(`model-based scenarios for ${role}`, () => {

    testCases.forEach(testCase => {
      it(testCase.name, testCase.execution);
    });

});
