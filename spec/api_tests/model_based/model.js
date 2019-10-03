class Model {
	constructor() {
		const source = {
			relativeFile: 'model.xlsx',
			sheet: 'Sheet1'
		};
		this.entitlements = getEntitlements(source);
	}

	/**
   *
   * @param {string} role
   */
	getExpectedEntitlementsFor(role) {
		return this.entitlements.filter((element) => element[role] != undefined).map((element) => element.Entitlement);
		//return ['a', 'b', 'c', 'x'];
	}

	/**
   *
   * @param {string} role
   */
	getNonExpectedEntitlementsFor(role) {
		return this.entitlements.filter((element) => element[role] == undefined).map((element) => element.Entitlement);
	}
}

module.exports = new Model();

function getEntitlements({ relativeFile, sheet }) {
	const excelToJson = require('convert-excel-to-json');
	const path = require('path');
	const file = path.join(__dirname, relativeFile);
	const options = {
		sourceFile: file,
		header: {
			rows: 1
		},
		columnToKey: {
			'*': '{{columnHeader}}'
		}
	};

	const result = excelToJson(options);

	return result[sheet];
}
