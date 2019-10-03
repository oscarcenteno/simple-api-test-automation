const api = require('./api');

describe('PoC / Wallet management / View wallets', function() {

	it('can get a single wallet', async function() {
		const wallet = await api.getWallet('sample');
		const expected = getExpected();

		expect(wallet).toEqual(expected);
	});
});
function getExpected() {
	return {
		"name": "sample",
		"id": 1,
		"ledgerId": 10
	};
}

