const XLSX = require ('xlsx');
const accountModel = require('../models/accountModel.js');


// read workbook
const workbook = XLSX.readFile('./temp_excel_files/20240521_Hapoalim_Transactions.xlsx', {cellDates: true});

const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const data = XLSX.utils.sheet_to_json(worksheet, {header: 1, UTC: true});

// const raw = data.slice(12,1)

console.log(data[9], typeof data[9][0]);
console.log(`${data[9][0].getUTCDate()}-${data[9][0].getUTCMonth() + 1}-${data[9][0].getUTCFullYear()}`);

accountModel.insertIncome(`${data[9][0].getUTCDate()}-${data[9][0].getUTCMonth() + 1}-${data[9][0].getUTCFullYear()}`, data[9][4])

