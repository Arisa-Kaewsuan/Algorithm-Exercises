// Optional: Find Mode
// - ให้เขียน Function ที่ชื่อว่า `findMode` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `arr` เป็น Array ของตัวเลข
//     - Function นี้จะ Return ค่า เลขที่ปรากฏบ่อยที่สุด (mode) ใน Array
//         - ถ้ามีมากกว่า 1 ตัวที่ถี่ที่สุด ให้ return ตัวที่เจอก่อนใน Array

const findMode = (arr) => {
    let maxCount = 0;
    let mode = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                count++;
            }
        }
        
        if (count > maxCount) {
            maxCount = count;
            mode = arr[i];
        }
    }
    
    return mode;
}
console.log(findMode([1, 2, 2, 3, 3, 3, 4])); //3
console.log(findMode([7, 7, 1, 1, 7])); //7
console.log(findMode([7, 7, 1, 1, 7, 1])); //7