let instructor = {
    firstName: 'Jonathan', 
    lastName: 'Sanchez', 
    city: 'Boca Raton', 
    family: {
        wife: 'Claudia',
        d1: 'Mia',
        d2: 'Annalle',
        pets: ['fish', 'cow', 'dog'] // ctrl + comd + space bar
    },
    education: {
        university: 'FIU',
        bootcampo: 'Boca Code',
    }
}

console.log(instructor)

console.log('firstName:', instructor.firstName)
console.log('Full name:', instructor.firstName + ' ' + instructor.lastName)
console.log('Pet: ', instructor.family.pets[2])


