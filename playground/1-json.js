const fs = require('fs');

const ageData = fs.readFileSync('1-json.json');
const dataJSON = ageData.toString();
const user = JSON.parse(dataJSON);

user.name = 'Test';
user.age = 33;

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);
console.log(user);