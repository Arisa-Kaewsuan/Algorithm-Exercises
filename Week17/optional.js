// Optional: Find Longest Word
// - ให้เขียน Function ที่ชื่อว่า `findLongestWord` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `text` มี Value Type เป็น String
//     - Function นี้จะ Return ค่าเป็นคำที่มีความยาวมากที่สุดในประโยค วัดจากจำนวนตัวอักษรในแต่ละคำ
//         - ถ้ามีคำที่ยาวที่สุดมากกว่า 1 คำ ให้ return คำแรกที่เจอก่อน

const findLongestWord = (text) => {
    return text.split(' ').reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    });
}

console.log(findLongestWord("I love programming very much")) // "programming"
console.log(findLongestWord("TechUp helps people switch careers")) // "careers"