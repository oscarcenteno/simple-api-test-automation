var axios = require('axios');

class Api{

  async getWallets() {
    var response = await axios.get('http://localhost:3000/wallets');

    return response.data;
  }
}

module.exports = new Api();