// Exercise 2: Filter Adults

// - ให้เขียน Function ที่ชื่อว่า `getAdults` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `people` เป็น Array ของ Object
//         - โดย Object แต่ละอันจะมี Key 2 ตัวได้แก่ `name` และ `age`
//     - Function นี้จะ Return Array ที่มีสมาชิกเป็นชื่อของคนที่มีอายุมากกว่าหรือเท่ากับ 18 ปี

const getAdults = (people) => {
    return people.filter(person => person.age >= 18).map(person => person.name)
}

let result1 = ([
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
 ]);
console.log(getAdults(result1)) // ["Alice", "Charlie"]