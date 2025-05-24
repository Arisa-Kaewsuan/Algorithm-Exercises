// Count Vowels
// - ให้เขียน Function ที่ชื่อว่า `countVowels` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `text` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่าเป็นจำนวนสระภาษาอังกฤษ (a, e, i, o, u) ที่ปรากฏใน `text`
//         - โดยนับทั้งตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่

const countVowels = (text) => {
    let count = 0;

    for(let i = 0; i < text.length; i++){
        if(text[i] === "A" || text[i] === "a"){
            count += 1;
        }
        else if(text[i] === "E" || text[i] === "e"){
            count += 1;
        }
        else if(text[i] === "I" || text[i] === "i"){
            count += 1;
        }
        else if(text[i] === "O" || text[i] === "o"){
            count += 1;
        }
        else if(text[i] === "U" || text[i] === "u"){
            count += 1;
        }
    }

    return count;
}
console.log(countVowels("hello")); // 2
console.log(countVowels("TECHUP")); // 2

// วิธีที่ 2 : ใช้ array + for of loop อ่านง่ายกว่า เขียนสั้นกว่า
const countVowels2 = (text) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for(let char of text){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }

    return count;
}
console.log(countVowels2("hello")); // 2
console.log(countVowels2("TECHUP")); // 2

// วิธีที่ 3 : ใช้ regular expression + .match + ternary operator
const countVowels3 = (text) => {
    const matches = text.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(countVowels3("hello")); // 2
console.log(countVowels3("TECHUP")); // 2