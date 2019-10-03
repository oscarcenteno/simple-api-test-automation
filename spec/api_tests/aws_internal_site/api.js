var axios = require('axios');

class Api{

  async isAvailable() {
    var response = await axios.get('http://ec2-3-17-131-127.us-east-2.compute.amazonaws.com/');

    return response.status == 200;
  }
}

module.exports = new Api();