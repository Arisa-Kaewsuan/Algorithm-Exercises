// Exercise 3: Find Passed Students
// - ให้เขียน Function ที่ชื่อว่า `getPassedStudents` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `students` ซึ่งเป็น Array ของ Object
//         - โดย Object แต่ละอันจะมี Key 2 ตัวได้แก่ `name` และ `score`
//     - Function นี้จะ Return Array ของ ชื่อ นักเรียนที่มีคะแนนมากกว่าหรือเท่ากับ 50

const getPassedStudents = (students) => {
    const passedStudent = [];
    for(let i = 0 ; i < students.length; i++){
        if(students[i].score >= 50){
            passedStudent.push(students[i].name);
        }
    }
    return passedStudent;
}
let result1 = [
    { name: "A", score: 80 },
    { name: "B", score: 45 },
    { name: "C", score: 60 }
 ];
console.log(getPassedStudents(result1));

// วิธีที่สองใช้ .reduce + .map
const getPassedStudents2 = (students) => {
    return students.filter(student => student.score >= 50).map(student => student.name);
} 
console.log(getPassedStudents2(result1));