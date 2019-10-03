var axios = require('axios');

class Api{

  async getWallet(name) {
    var response = await axios.get('http://localhost:3000/wallets/' + name);

    return response.data;
  }
}

module.exports = new Api();