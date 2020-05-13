// Object destructuring

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Rayn Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

// Array destructuring
const item = ['Coffee (ice)', '$2.00', '$2.75', '$3.00']

const [order, , price] = item

console.log(`A medium ${order} costs ${price}`)