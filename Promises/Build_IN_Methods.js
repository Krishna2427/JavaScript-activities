// // let Promise1 = new Promise((resolve, reject)=>{
// //      setTimeout(()=>{
// //         resolve("krishna")
// //      },2000);
// // })
// // let Promise2 = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve("venkat")
// //     },3000);
// // })

// // let Promise3 = new Promise((resolve, reject)=>{
// //     setTimeout(()=>{
// //         resolve("prasad")
// //     },4000)
// // })
// // Promise.all([Promise1, Promise2, Promise3])
// // .then((result)=>{
// //     console.log(result)
// // })
// // .then((error)=>{
// //     console.error(error);
// // })

// let Promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//        resolve("krishna")
//     },3000);
// })
// let Promise2 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//        resolve("venkat")
//    },10000);
// })

// let Promise3 = new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//        resolve("prasad")
//    },4000)
// })
// Promise.race([Promise1, Promise2, Promise3])
// .then((result)=>{
//    console.log(result)
// })
// .then((error)=>{
//    console.error(error);
// })
