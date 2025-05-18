// Optional: Palindrome Checker**
// ให้เขียน Function ที่ชื่อว่า `isPalindrome` ซึ่งมีคุณสมบัติดังนี้
//   - รับ Parameter 1 ตัวคือ `word` มี Value Type เป็น `String`
//   - Function นี้จะ Return ค่า `true` ถ้า `word` เป็น Palindrome
//   - หากไม่ใช่ ให้ Return `false`
//   - Palindrome คือคำที่อ่านจากหน้าไปหลังหรือหลังไปหน้าก็ได้คำเดียวกัน เช่น `“madam”`, `“racecar”`

const isPalindrome = (word) => {
    let reverseText = '';
    for(let i = word.length - 1; i >= 0; i--){
        reverseText += word[i];
    }

    if(reverseText === word){
        return true;
    }
    else{
        return false;
    }
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false