// For

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// While

let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// Do While

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 10);

// For in
 
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

// For of

const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}
