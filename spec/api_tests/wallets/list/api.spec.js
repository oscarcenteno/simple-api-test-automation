const api = require('./api');

describe('PoC / Wallet management / View wallets', () => {

	it('can get the wallet list', async () => {
		const wallet = await api.getWallets();
		const expected = getExpected();

		expect(wallet).toEqual(expected);
	});
});

function getExpected() {
	return [
		{
			name: "sample",
			id: 1,
			ledgerId: 10
		},
		{
			name: "asdfasdf",
			id: 2,
			ledgerId: 20
		}
	];
}
