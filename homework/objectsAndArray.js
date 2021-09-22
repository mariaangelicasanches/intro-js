// function returnCleanUrl(dirtyUrl) {
//     return dirtyUrl.substring(7,dirtyUrl.length)
// }

// var myName = 'Daniel Bruce'
// var url = 'http://fabriciosanchez.com'

// console.log(url.substring(7,url.length).toLocaleUpperCase())

// console.log(myName[2])
// console.log(myName.length)
// console.log(myName.trim())


// // for (let i = 0; i < myName.length; i++) {
// //     console.log(myName[i] + "\n")
// // }



// var person = {
//     "firstName": "Fabricio",
//     "lastName": "Sanchez",
//     "Spouse": {
//         "firstName": "Maria Angelica",
//         "lastName": "Sanches",
//         "SpouseSon": {
//             "firstName": "Benjamin"
//         }
//     }
// }

// console.log(`Person's name: ${person.firstName}, Person's spouse: ${person.Spouse.firstName}, Spouse's son: ${person.Spouse.SpouseSon.firstName}`)



arr = [4, 2, 6, 1, 8, 10, 3]

bigger = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > bigger) {
        bigger = arr[i]
    }
}
console.log(`The biggest number is: ${bigger}`)


