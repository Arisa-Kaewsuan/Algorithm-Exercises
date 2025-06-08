// Exercise 3: Group and Calculate Numbers

// - ให้เขียน Function ที่ชื่อว่า `sumByType` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `numbers` เป็น Array ที่บรรจุตัวเลขจำนวนเต็ม
//     - Function นี้จะ Return ค่าเป็น Object ที่มีโครงสร้างดังนี้
//        - ต้องแยก 0 ออกจากเลขคู่เสมอ
//        - หากไม่เจอเลขคู่เลย ให้ return 1

const sumByType = (numbers) => {
    let zeroNumber = 0;
    let evenNumber = 1;
    let oddNumber = 0;
    const obj = {};

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 0) {
            zeroNumber += 1;
        }
        else if(numbers[i]%2 === 0) {
            evenNumber *= numbers[i];
        }
        else {
            oddNumber += numbers[i];
        }
    }

    obj.even = evenNumber;
    obj.odd = oddNumber;
    obj.zero = zeroNumber;
    return obj;
}

console.log(sumByType([0, 2, 3, 0, 4, 5])) //{ even: 8, odd: 8, zero: 2 }
console.log(sumByType([0, 0, 1, 3, 5])) //{ even: 1, odd: 9, zero: 2 }
console.log(sumByType([2, 4, 6])) //{ even: 48, odd: 0, zero: 0 }