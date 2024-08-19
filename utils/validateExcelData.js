const readExcel = require ('./readExcelData.js');
const { HAPO_ACC_NAME } = process.env;
const HAPO_EXCEL_HEADERS = ['תאריך', 'הפעולה', 'פרטים', 'אסמכתא', 'חובה', 'זכות', "יתרה בש''ח", 'תאריך ערך', 'לטובת', 'עבור'];


function checkColumnsNames (columns_names, names_to_check) {
    let result;
    if (columns_names.length == names_to_check.length) {
        result = true;
        for (i = 0; i < columns_names.length; i++){
            if (names_to_check[i] != columns_names[i]) {
                result = false;
            };
        };
    } else result = false;
    return result;
};


module.exports = {

    validateHapoalim: async (filename='./temp_excel_files/excelNewTransactions.xlsx') => {

        // reads data from excel file and convert it to array of arrays
        const data = await readExcel.readExcelFile(filename);

        // console.log(data);
        

        let validation_result = true;

        // checks that excel file has the correct structure and contains at least one row of data
        // checks if the name of account is in headers of the table
        // checks equal amount and naming of columns in checked data and in etalon template
        if (data.length > 3 && data[3].length != 0) {
            validation_result = data[1][0].includes(HAPO_ACC_NAME);        
            validation_result = validation_result && checkColumnsNames(data[2], HAPO_EXCEL_HEADERS); 
        } else validation_result = false;

        return validation_result;
    }
};


