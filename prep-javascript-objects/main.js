var person = { firstName: 'Carl', lastName: 'Garth', hobby: 'running' };
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:" + ' ' + fullName + '.');
person.job = 'chef';
console.log("The person's job is:", person.job + '.');
person.previousJob = 'janitor';
console.log("The person's previous job is:", person.previousJob + '.');
console.log(person);
