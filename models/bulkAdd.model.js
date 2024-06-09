import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
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

const EmployeeModel = mongoose.model('employeedata', employeeSchema);

export default EmployeeModel; 
