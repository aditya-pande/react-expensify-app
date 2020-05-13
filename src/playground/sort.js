const arr = [12,3,45,7]

console.log(arr)

arr.sort((a, b) => {
    if (a < b) {
        return -1
    }
    else if (a > b) {
        return 1
    }
    return 0
})

console.log(arr) 