const fruits = ['kiwi', 'lime', 'apple', 'banana', 'orange', 'grapes']

function getNextFruit() {
    const nextFruit = fruits.shift()
    console.log('You get a', nextFruit)
    console.log('There are', fruits.length, 'fruits left')
}

const numLoops = fruits.length // 6
for(let i = 0; i < numLoops; i++) {
    getNextFruit()
}


