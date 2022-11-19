const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
]

// let firstEl = matrix[0]
// let secondEl = matrix[1]
// let thirdEl = matrix[2]

// let [firstEl, secondEl, thirdEl] = matrix
// let newMatrix = []
//
// newMatrix = newMatrix.concat(firstEl, secondEl, thirdEl)
// console.log(newMatrix)

let newMatrix = []
matrix.forEach(item => {
    if (Array.isArray(item)) {
       newMatrix = newMatrix.concat(...item)
    }
    else newMatrix = newMatrix.concat(item)
})
console.log(newMatrix)
console.log(matrix)

