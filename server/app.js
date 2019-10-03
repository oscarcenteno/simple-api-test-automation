const express = require('express');
const app = express();
const port = 3000;
var _ = require('underscore');

const { endPoints } = require('./endpoints');

const getEndPoints = endPoints.filter(filterGet);

const smartGetEndPoints = [];

getEndPoints.forEach((endpoint) => {
	const found = smartGetEndPoints.find((element) => element.url == endpoint.url);

	if (found) {
		found.mappings.push({
			params: endpoint.jsonParams,
			response: endpoint.jsonResponse
		});
	} else {
		const smartEndPoint = {
			method: endpoint.method,
			url: endpoint.url,
			mappings: [
				{
					params: endpoint.jsonParams,
					response: endpoint.jsonResponse
				}
			]
		};
		smartGetEndPoints.push(smartEndPoint);
	}
});

const createEndpoint = (element) => {
	app.get(element.url, function(req, res) {
		console.log(req.query);
		res.setHeader('Content-Type', 'application/json');

		const mappings = element.mappings;
		console.log(mappings);

    const found = mappings.find((element) => {
      const equal = _.isEqual(element.params, req.query);
			console.log('Compare:' + equal);
			console.log(element.params);
			console.log(req.query);
			console.log();

      return equal;
		});

		if (found) {
			console.log(element.jsonResponse);
			res.json(found.response);
		} else {
			console.log('Response not found');
			res.send('Response not found');
		}
	});
};

smartGetEndPoints.forEach(createEndpoint);

/*
app.get('', function (req, res) {
  res.send(req.params)
})
app.get('/entitlements', function (req, res) {
  res.status(200).send(['a', 'b', 'c'])
})
*/

app.listen(port, () => console.log(`Listening on port ${port}!`));

function filterGet(element) {
	return element.method == 'get';
}
