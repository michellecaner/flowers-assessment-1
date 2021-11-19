const flowers = [
    {
        id: 1,
        color: "White",
        species: "Rose",
        price: .90
    }, 
    {
        id: 2,
        color: "Red",
        species: "Tulip",
        price: 1.10
    }, 
]

const addFlower = (flowerObject) => {
    // Find what the last or max ID is
    const indexNum = flowers.length - 1
    let maxID = flowers[indexNum].id
    // Add 1 to max ID
    const newID = maxID + 1
    // Make the new ID
    // Add ID property to object
    flowerObject.id = newID
    // Add flower object to Flowers array
    flowers.push(flowerObject)
    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */
    
}
addFlower({
    color: "Orange",
    species: "Tulip",
    price: 0.95
})

console.log(flowers)

const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code


    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */
        for (let i=0; i < flowers.length; i++) {
            if (flowers[i].price >= 1.00)
            expensiveFlowers.push(flowers)
        
        }

    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

