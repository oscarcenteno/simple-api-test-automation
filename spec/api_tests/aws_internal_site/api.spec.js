const api = require('./api');

describe('devopstLydia endpoint', function() {

	it('is available', async function() {
		var isAvailable = await api.isAvailable();

		expect(isAvailable).toEqual(true);
	});
});
