// Exercise 2: Sum of Even Numbers
// - ให้เขียน Function ที่ชื่อว่า `sumEvenNumbers` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `numbers` มี Value Type เป็น Array ที่บรรจุตัวเลขจำนวนเต็ม
//     - Function นี้จะ Return ค่าเป็นผลรวมของเลขคู่ทั้งหมดใน Array

const sumEvenNumbers = (numbers) => {
    let sum = 0;

    for(let num of numbers){
        if(num%2 === 0){
            sum += num;
        }
    }

    return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4]));// 6
console.log(sumEvenNumbers([7, 11, 20, 8]));// 28

// วิธีที่ : ใช้ reduce
const sumEvenNumbers2 = (numbers) => {
    return numbers.reduce((sum, num) => {
        return num%2 === 0 ? sum + num : sum;
    },0)
}
console.log(sumEvenNumbers2([1, 2, 3, 4]));// 6
console.log(sumEvenNumbers2([7, 11, 20, 8]));// 28