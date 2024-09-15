// // promises Chaining
// // -----------------
// let p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(20);
//     },1000);
// })
// p.then((res)=>{
//     console.log(res);
//     return res * 2;
// })
// .then((res)=>{
//     console.log(res);
//     return res * 3;
// })
// .then((res)=>{
//     console.log(res);
//     return res * 4;
// })
// .then((res)=> console.log(res))

// Real Time Senario
// ---------------------

let  getUser = (userID)=>{
    return new Promise((resolve, reject)=>{
        console.log("Getting User");
        setTimeout(()=>{
            resolve({
                userID:userID,
                userName:"Admin"            })
        });
    },2000);
}

let getServices=(user)=> {
    return new Promise((resolve, reject) => {
        console.log(`Getting Services of ${user.userName}`);
        setTimeout(() => {
            resolve(['email', 'print', 'FAX']);
        }, 2000);
    });
}

let getServiceCost =(service)=>{
    return new Promise((resolve, reject)=>{
        console.log(`Calculating the Services cost of ${service}`);
        setTimeout(()=>{
            resolve(service.length * 200);
        },2000);
    })
}

//getUser(100).then(getServices).then(getServiceCost).then(console.log);

// handling errors in the Promises.
// try{
//     getUser(100).then(getServices).then(getServiceCost).then(console.log);
// }catch(error){
//     console.log(`Cought by try / catch ${error}`);
// }

// async / await

let ShowServicesConst= async ()=>{
    try{
        let user = await getUser(100);
        let services = await getServices(user);
        let cost = await getServiceCost(services);
        console.log(`The services cost :${cost}`);
    }catch(error){
       console.error(error);
       
    }
}
ShowServicesConst();
