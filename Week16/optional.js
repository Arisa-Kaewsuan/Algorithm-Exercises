// Optional: Group By Property
// - ให้เขียน Function ที่ชื่อว่า `groupBy` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 2 ตัว
//         - `items` เป็น Array ของ Object
//             - โดย Object แต่ละอันจะมี Key 2 ตัวได้แก่ `name` และ `type`
//         - `property` เป็น String ที่ระบุว่าให้จัดกลุ่มตาม Key ไหน
//     - Function นี้จะ Return ค่าเป็น Object ที่จัดกลุ่มรายการตามค่าของ `property`

const groupBy = (item, property) => {
    return item.reduce((result, item) => {
        const key = item[property];
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}

let result1 = groupBy([
    { name: "Apple", type: "fruit" },
    { name: "Broccoli", type: "vegetable" },
    { name: "Banana", type: "fruit" }
 ], "type");

console.log(result1)

// {
//   fruit: [
//     { name: "Apple", type: "fruit" },
//     { name: "Banana", type: "fruit" }
//   ],
//   vegetable: [
//     { name: "Broccoli", type: "vegetable" }
//   ]
// }