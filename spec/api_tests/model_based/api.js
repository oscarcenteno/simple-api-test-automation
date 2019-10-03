var axios = require('axios');

class Api {
	async getEntitlementsFor(role) {
		var response = await axios.get('http://localhost:3000/entitlements', {
			params: { role: role.toLowerCase() }
		});

		return response.data;
	}
}

module.exports = new Api();
