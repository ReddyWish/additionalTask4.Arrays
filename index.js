const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
]

let firstEl = matrix[0]
let secondEl = matrix[1]
let thirdEl = matrix[2]

let newMatrix = []
newMatrix = newMatrix.concat(firstEl, secondEl, thirdEl)
console.log(newMatrix)