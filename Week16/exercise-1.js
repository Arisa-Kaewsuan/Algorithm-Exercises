// Exercise 1: Capitalize First Letter

// - ให้เขียน Function ที่ชื่อว่า `capitalizeWords` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `sentence` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่า String ที่มีการเปลี่ยนให้ตัวอักษรแรกของทุกคำในประโยคเป็นตัวพิมพ์ใหญ่

const capitalizeWords = (sentence) => {
    const word = sentence.split(' ');
    const newarray = [];

    for(let i = 0; i < word.length; i++) {
        newarray.push(word[i].charAt(0).toUpperCase() + word[i].slice(1));
    }

    return newarray.join(' ');
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("techup career prep")); // "Techup Career Prep"