const api = require('./api');

describe('Internet API endpoint', function() {

	it('is available', async function() {
		const breeds = await api.getBreeds();

		expect(breeds).toBeDefined();
	});
});
