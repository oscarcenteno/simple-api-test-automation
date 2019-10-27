const { ExcelServer } = require('api-server-sim');

const sim = new ExcelServer({ file: './endpoints.xlsx', port: 3000 });

sim.run();
