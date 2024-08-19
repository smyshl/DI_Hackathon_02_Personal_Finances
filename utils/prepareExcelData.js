const validateExcelData = require ('./validateExcelData.js');
const readExcel = require ('./readExcelData.js');


// validateExcelData.validateHapoalim()
// .then(res => console.log(res))
// .catch(err => console.log(err));


async function putIncomesToDb () {

    try {
        let validation_result = await validateExcelData.validateHapoalim();
        console.log(validation_result);
        

        if (validation_result) {

            try {
                const data = await readExcel.readExcelFile('./temp_excel_files/excelNewTransactions.xlsx');
                console.table(data);   
            } catch (error) {
                console.log(error);
                
            }

            
        }

    } catch (error) {
        console.log(error);
        
    }

};

putIncomesToDb();