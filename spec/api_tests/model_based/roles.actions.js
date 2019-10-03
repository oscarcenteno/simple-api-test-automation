const api = require('./api');
const model = require('./model');

function generateTestCases(role) {
  let expectedList = model.getExpectedEntitlementsFor(role);

  const positiveTestCases = expectedList.map(entitlement => {
    const name = `${role} is entitled to ${entitlement}`;

    const execution = async () => {
        const actualEntitlements = await api.getEntitlementsFor(role);
        const isEntitled = actualEntitlements.includes(entitlement);

        expect(isEntitled).toEqual(true);
    };

    return { name, execution };
  });

  let nonExpectedList = model.getNonExpectedEntitlementsFor(role);

   const negativeTestCases = nonExpectedList.map(entitlement => {
      const name = `${role} is not entitled to ${entitlement}`;

      const execution = async () => {
          const actualEntitlements = await api.getEntitlementsFor(role);
          const isEntitled = actualEntitlements.includes(entitlement);

          expect(isEntitled).toEqual(false);
      };

      return { name, execution };
   });

    return positiveTestCases.concat(negativeTestCases);
  };

module.exports = { generateTestCases };
