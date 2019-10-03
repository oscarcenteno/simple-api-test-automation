const { generateTestCases } = require('./roles.actions');
const role = 'Krr Operator';
const testCases = generateTestCases(role);

describe('model-based scenarios for ' + role, () => {
	testCases.forEach((testCase) => {
		it(testCase.name, testCase.execution);
	});
});
