// Exercise 1: Find Common Elements
// - ให้เขียน Function ที่ชื่อว่า `findCommon` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 2 ตัวคือ `arr1` และ `arr2` เป็น Array ที่บรรจุตัวเลข
//     - Function นี้จะ Return ค่าเป็น Array ที่มีเฉพาะตัวเลขที่ปรากฏอยู่ใน `arr1` และ `arr2`

const findCommon = (arr1, arr2) => {
  return arr1
    .filter((item) => arr2.includes(item))
    .filter((item, index, self) => self.indexOf(item) === index);
};

console.log(findCommon([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(findCommon([5, 6], [7, 8])); // []
