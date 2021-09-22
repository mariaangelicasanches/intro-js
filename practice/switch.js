const fruit = 'apple'

 switch(fruit) {
     case 'kiwi':
         console.log(fruit, 'is green')
         break
    case 'orange':
    case 'mango':
        console.log(fruit, 'is orange')
        break
    case 'lemon':
    case 'banana':
        console.log(fruit, 'is yellow')
        break
    case 'apple':
    case 'strawberry':
        console.log(fruit, 'is red')
        break
        default:
        console.log('I have no idea what is the color of this fruit')
 }
