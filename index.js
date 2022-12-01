const {MongoClient}=require('mongodb');
const url=('mongodb://127.0.0.1:27017/');
const client=new MongoClient(url);

async function main(){
    client.connect();
    const DatabaseName=client.db('Human_Resource');
    const CollectionName=DatabaseName.collection('employee');
    const data=[
        {
          "firstName": "John",
          "lastName": "Doe",
          "salary": "25000",
          "department": "HR",
          "lastCompany": "X",
          "lastSalary": "10000",
          "overallExp": "2",
          "contactInfo": "1234567890",
          "yearGrad": "2016",
          "gradStream": "CSE"
        },
        {
          "firstName": "Rohan",
          "lastName": "Jame",
          "salary": "30000",
          "department": "Technical",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "1",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "20000",
          "overallExp": "1",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "ECE"
        },
        {
          "firstName": "Sao",
          "lastName": "Avika",
          "salary": "30000",
          "department": "Sales",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "roh",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "EEE"
        },
        {
          "firstName": "Rohan",
          "lastName": "Jame",
          "salary": "30000",
          "department": "Technical",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "1",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "20000",
          "overallExp": "1",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "ECE"
        },
        {
          "firstName": "Sao",
          "lastName": "Avika",
          "salary": "30000",
          "department": "Sales",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
         "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "EEE"
        },
        {
          "firstName": "Rohan",
          "lastName": "Jame",
          "salary": "30000",
          "department": "Technical",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "1",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "20000",
          "overallExp": "1",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "ECE"
        },
        {
          "firstName": "Sao",
          "lastName": "Avika",
          "salary": "30000",
          "department": "Sales",
          "lastCompany": "Y",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "1234567860",
          "yearGrad": "2015",
          "gradStream": "CSE"
        },
        {
          "firstName": "Jame",
          "lastName": "Doe",
          "salary": "35000",
          "department": "Accounts",
          "lastCompany": "Z",
          "lastSalary": "15000",
          "overallExp": "2",
          "contactInfo": "123567890",
          "yearGrad": "2019",
          "gradStream": "EEE"
        }]
    const EmployeeDetails= await CollectionName.insertMany(data);
    console.log(EmployeeDetails);

    const AllDocuments=await CollectionName.find().toArray();
    console.log("All documents in the collection",AllDocuments);

    const salary=await CollectionName.find({"salary":{$gt:"30000"}}).toArray();
    console.log(salary);

    const Experience=await CollectionName.find({"overallExp":{$gt:"2"}}).toArray();
    console.log(Experience);

    const GradExp=await CollectionName.find({"yearGrad":{$gt:"2015"},"overallExp":{$gt:"2"}}).toArray();
    console.log(GradExp);

    const salupdate=await CollectionName.updateMany({"salary":{$gt:"70000"}},{$set:{"salary":"65000"}});
    console.log(salupdate);
    
    const deleteDocument=await CollectionName.deleteMany({lastCompany:"Y"});
    console.log(deleteDocument);
}

main();