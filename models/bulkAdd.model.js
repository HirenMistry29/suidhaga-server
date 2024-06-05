import mongoose from 'mongoose'

const excelDataSchema = new mongoose.Schema({
  title: String,
  firstName: String,
  middleName: String,
  lastName: String,
  mobile: String,
  aadharNumber: String,
  rollNumber: String,
  batchMonth: String,
  batchNo: String
});

const ExcelDataModel = mongoose.model('employeedata', excelDataSchema);

export default ExcelDataModel; 
