// Exercise 2: Reverse String**
// ให้เขียน Function ที่ชื่อว่า `reverseString` ซึ่งมีคุณสมบัติดังนี้
//   - รับ Parameter 1 ตัวคือ `text` มี Value Type เป็น `String`
//   - Function นี้จะ Return ค่า String ที่มีการเรียงตัวอักษรจากหลังไปหน้า

const reverseString = (text) => {
    let reversedText = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i];
    }
    return reversedText;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("TechUp")); // "pUhceT"
