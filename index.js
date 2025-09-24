
// let students = ["Bektora", "Jamshid", "Behzod", "Xurshid","Sardor", "Diyor","Sugdiyona","Nargiza"]
// length --- 
// 1) toString()
//  students.toString() // Massiv elementlarini (,) stringga o'tkazadi
// console.log(students);

// console.log(a);
// 2) at(index) //
// console.log(students.at(-1));
// console.log(students[-1]);
// 3) join(separator)
// let s = students.join('/')
// console.log(s);

//4)pop() Oxirgi elementni olib tashlaydi
// console.log(students.pop());
// console.log(students);


// 5) push(element) 
// students.push("Sarvar")
// students.push("Faridaxon")
// console.log(students);

// 6) shift() 
// students.shift()
// console.log(students);

// 7) unshift(element)
// students.unshift("Faridaxon")
// console.log(students);


// let sonlar = [7,3,5,5,6,0,8] // 10 30


// 8) delete

// delete students[5]
// console.log(students);

// 9) concat()
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myBoys.concat(myGirls, sonlar, students);
// console.log(myChildren);
// let arr = students + sonlar
// console.log(arr);
// 10) copyWithin(target, start, end)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(1,3,4);
// console.log(fruits);


// //12) slice(start, end)
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,3);
// console.log(citrus);

// let students = ["Bektora", "Jamshid", "Behzod", "Xurshid","Sardor", "Diyor","Sugdiyona","Nargiza"]
// length --- 
// 1) toString()
//  students.toString() // Massiv elementlarini (,) stringga o'tkazadi
// console.log(students);

// console.log(a);
// 2) at(index) //
// console.log(students.at(-1));
// console.log(students[-1]);
// 3) join(separator)
// let s = students.join('/')
// console.log(s);

//4)pop() Oxirgi elementni olib tashlaydi
// console.log(students.pop());
// console.log(students);


// 5) push(element) 
// students.push("Sarvar")
// students.push("Faridaxon")
// console.log(students);

// 6) shift() 
// students.shift()
// console.log(students);

// 7) unshift(element)
// students.unshift("Faridaxon")
// console.log(students);


// let sonlar = [7,3,5,5,6,0,8] // 10 30

// 8) delete

// delete students[5]
// console.log(students);

// 9) concat()
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myBoys.concat(myGirls, sonlar, students);
// console.log(myChildren);
// let arr = students + sonlar
// console.log(arr);
// 10) copyWithin(target, start, end)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(1,3,4);
// console.log(fruits);


// //12) slice(start, end)
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,3);
// console.log(citrus);


// // 13) splice(start, deletedCount, newElements)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2,1);
// console.log(fruits);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1,1, "Apple");
console.log(fruits);
fruits.splice(3,1, "Banana");
console.log(fruits);
