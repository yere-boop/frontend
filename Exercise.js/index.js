// Destructuring
// 1. 
const fruits = ["apple", "banana", "orange"];
const [first, second] = fruits;

console.log(first); // apple
console.log(second); // banana

// 2. 
const user = { name: "John", age: 25 };
const { name, age } = user;

console.log(name); // John
console.log(age); // 25

// 3. 
const numbers = [1, 2, 3, 4];
const [first1, , third] = numbers;

console.log(first1); // 1
console.log(third); // 3

// 4.
const car = { brand: "Toyota", model: "Corolla", year: 2021 };
const { brand, year } = car;

console.log(brand); // 'Toyota'
console.log(year); // 2021

// 5. 
const colors = ["red"];
const [first2 = "blue", secondd = "green"] = colors;

console.log(first2); // 'red'
console.log(secondd); // 'green' (default value)

// 6. 
const person = { nama: "Alice" };
const { nama, umur = 30 } = person;

console.log(nama); // 'Alice'
console.log(umur); // 30 (default value)

// 7. 
const angka = [1, 2, 3, 4];
const [first3, ...rest] = angka;

console.log(first3); // 1
console.log(rest); // [2, 3, 4]

// 8. 
const human = { name: "Bob", age: 25, city: "New York" };
const { Name, ...rest2 } = human;

console.log(Name); // 'Bob'
console.log(rest2); // { age: 25, city: 'New York' }

console.log("----------------------------------------------------------------");

// EXERCISE 6 yang bisa diubah menjadi Destructuring
console.log("Exercise 6");
// 1. 
console.log("1. yearUntilRetirement dengan Destructuring Parameter");
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(${firstName} retires in ${retirement} years);
  } else {
    console.log(${firstName} is already retired.);
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" });

// 3.  
console.log("3. calculateArea dengan Destructuring Parameter");
const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(Area with 21 radius: ${area21}, and area with 7 radius: ${area7});