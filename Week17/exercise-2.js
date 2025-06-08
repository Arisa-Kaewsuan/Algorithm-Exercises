// Exercise 2: Remove Duplicates
// - ให้เขียน Function ที่ชื่อว่า `removeDuplicates` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `arr` ซึ่งเป็น Array ที่บรรจุตัวเลข
//     - Function นี้จะ Return ค่าเป็น Array ใหม่ ที่มีเพียงตัวเลขที่ไม่ซ้ำกัน จาก `arr` เดิม

const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3])) // [1, 2, 3]
console.log(removeDuplicates([5, 5, 5, 5])) // [5]