const { db } = require ('../config/db.js');

module.exports = {
    insertIncome: async (date, income_value, account_id=1) => {
        return db('account_incomes').insert({date, income_value, account_id}, ['date', 'income_value', 'account_id']);
    }
}