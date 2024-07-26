const XLSX = require ('xlsx');
const accountModel = require('../models/accountModel.js');


module.exports = {
    readExcelFile: async (filename) => {
        // reading workbook, worksheet and converting it to array of arrays
        const workbook = XLSX.readFile(filename, {cellDates: true});
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        return XLSX.utils.sheet_to_json(worksheet, {header: 1, UTC: true});
    }
};


