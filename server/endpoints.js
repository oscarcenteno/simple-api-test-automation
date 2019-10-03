const excelToJson = require('convert-excel-to-json');

var path = require('path');
const file = path.join(__dirname, 'endpoints.xlsx');

class Endpoints {
	constructor() {
		const rows = getRowsFromSheet('Sheet1');
		this.endPoints = rows.map((element) => {
			let params;
			if (element.params) {
				try {
					params = JSON.parse(element.params);
				} catch (error) {
					params = require(element.params);
				}
			}

			let response;
			if (element.response) {
				try {
					response = JSON.parse(element.response);
				} catch (error) {
					response = require(element.response);
				}
			}

			return {
				method: element.method.toLowerCase(),
				url: element.url,
				jsonParams: params,
				jsonResponse: response
			};
		});
	}
}

module.exports = new Endpoints();

function getRowsFromSheet(sheet) {
	const result = excelToJson({
		sourceFile: file,
		header: {
			rows: 1
		},
		columnToKey: {
			'*': '{{columnHeader}}'
		}
	});

	return result[sheet];
}
