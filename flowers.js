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
        const lastIndex = flowers.length -1
        const currentLastFlower = flowers[lastIndex]
        const maxID = currentLastFlower.id
        const idForNewFlower = maxID + 1
          
        flowerObject.id = idForNewFlower
        flowers.push(flowerObject)

}


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

