// const fetchData = new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve('Data fetched'),4000);
// });
// fetchData.then((data)=>{
//     console.log(data);
// })
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//       console.error('Error:', error);
// })

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         console.log("Fetching Data....");
//         setTimeout(()=>{
//             const data = {name:"krishna", age:24};
//             resolve(data);
//         }, 5000);
//     });
// }
// fetchData().then((result)=> console.log("data fetched", result))
//            .catch((error)=> console.error("Error Fetching data", error));

// const myPromise = new Promise((resolve, reject)=>{
//     const success = false;

//     if(success){
//         resolve("Operation was successfully");
//     }else{
//         reject("There was arror in the opration")
//     }
// });

// myPromise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.error("Cought Error:", error);
// })

// const myPromise = new Promise((resolve, reject)=>{
//       console.log("Starting Operation");
//       throw new Error("Something went Wrong");
//       resolve("Oparation completed Successfully");
// });
// myPromise.then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.error(error.message);
// });

// const myPromise = new Promise((resolve, reject)=>{
//       resolve("Data fetched Successfully");
// });

// myPromise.then((data)=>{
//     console.log("data fetched successfully");
//     throw new Error("Error while Processing data");
//    // console.error("Error while Processing data");
// })
// .then((processingData)=>{
//     console.log(processingData);
// }).catch((error)=>{
//     console.error("Cought Error:",error.message);
// });

function fetchWeather(city){
    const key = 'your_api_key';
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    return fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error(`Error fetching Weather data:${response.statusText}`);
        }
        return response.json();
    })
}

     