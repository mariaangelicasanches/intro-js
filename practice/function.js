function calculateAreaOfPie (diameter) {
    const radius = diameter / 2
    const area = Math.PI * (radius ** 2)
    return area
}

function pricePerSqIn (area, price) {
    return price / area
}


function whatIsBetterDeal(a, b) {
    /*if (a < b) {
        console.log("Pizza 12in is a better deal")
    } else {
        console.log("Pizza 16in is a better deal")
    }*/
   return (a < b) ? 'Pizza 12in is a better deal' : 'Pizza 16in is a better deal'

}

// 12" costs $18.99
// 16" costs $21.99

const diameter1 = 12
const cost1 = 18.99
const diameter2 = 16
const cost2 = 21.99
const area1 = calculateAreaOfPie(diameter1)
const area2 = calculateAreaOfPie(diameter2)
const pricePerUnitArea1 = pricePerSqIn(area1, cost1)
const pricePerUnitArea2 = pricePerSqIn(area2, cost2)

// console.log(`a ${diameter}" pizza costs $${pricePerUnitArea.toFixed(2)} / sq. in.` )

console.log(whatIsBetterDeal(pricePerUnitArea1, pricePerUnitArea2))

