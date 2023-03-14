const info = {
    firstName: 'Reander', 
    lastName: 'Agulto', 
    age: 29,
    country: 'Philippines', 
    city: 'Dasmarinas'
}; 

localStorage.setItem('info',  JSON.stringify(info));
console.table(JSON.parse(localStorage.getItem('info')));

const student = {
    firstName: 'Reander', 
    lastName: 'Agulto', 
    age: 29, 
    skills: ['HTML', 'CSS', 'JS', 'PHP'],
    country: 'Philippines', 
}
localStorage.setItem('studFirstName', student.firstName); 
localStorage.setItem('studLastName', student.lastName);
localStorage.setItem('studLastName', student.lastName);
localStorage.setItem('studAge', student.age);
localStorage.setItem('studSkills', JSON.stringify(student.skills));
localStorage.setItem('studCountry', student.country);
console.table(JSON.parse(localStorage.getItem('studSkills')));
