// console.log("Jeck Ma maslahatlari");
const List = [
    "yaxshi talaba boling", //0-20
    "togri boshliq tanlang va koprop xato qiling", //20-30
    "uzingizga ishlashni boshlang", //30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi dam oling, foydasi yoq endi" //60-
];
// callback functions
function maslahatBering(a, callback){
    if(typeof a !== 'number') callback("insert a number", null)
    else if(a <= 20)callback(null, List[0]);
    else if(a > 20 && a <= 30)callback(null, List[1]);
    else if(a > 30 && a <= 40)callback(null, List[2]);
    else if(a > 40 && a <= 50)callback(null, List[3]);
    else if(a > 50 && a <= 60)callback(null, List[4]);
    else{
        setInterval(()=>{
            callback(null, List[5]);
        }, 2000);
    }
}
console.log('pass here 0');
maslahatBering(70, (err, data)=>{
    if(err)console.log("ERROR: ", err);
    else{
        console.log(data);
    }
});
console.log('pass here 1');
// ASYNC FUNCTION
// async function maslahatBering(a, callback){
//     if(typeof a !== 'number') throw new Error("insert a number")
//     else if(a <= 20) return List[1];
//     else if(a > 20 && a <= 30) return List[1];
//     else if(a > 30 && a <= 40) return List[2];
//     else if(a > 40 && a <= 50) return List[3];
//     else if(a > 50 && a <= 60) return List[4];
//     else{
//         // return List[5];
//         // setTimeout(()=>{
//         //     return List[5];
//         // }, 4000);
//         return new Promise((resolve, reject)=>{  //resolve => return, reject => err
//             setTimeout(()=>{
//                 resolve(List[5]);
//             }, 4000);
//         });
//     }
// };
// console.log('passed here 0');

// // maslahatBering(65, (err, data)=>{
// //     if(err)console.log('error: ', err);
// //     else console.log('javob', data);
// // });

// // CALL by then, catch 

// // maslahatBering(25)
// // .then(data => {
// // console.log('javob:', data);
// // })
// // .catch(err=>{
// //     console.log('error: ', err);
// // })

// // console.log('passed here 1');
// // CALL by async / await
// async function run(){
//     let javob = await maslahatBering(22);
//     console.log(javob);
//     javob = await maslahatBering(79);
//     console.log(javob);
//     javob = await maslahatBering(43);
//     console.log(javob);
//     javob = await maslahatBering(55);
//     console.log(javob);
// }

// run()