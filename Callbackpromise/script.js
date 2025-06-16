
// function hello(){
//     console.log("hello");
// }
// function hello1(hello){
//    console.log("kapil");
//    hello();
// }

//   hello1(hello)

// setTimeout(hello,4000);

    // function getData(dataid,getnextdata){
    //     setTimeout( ()=>{
    //         console.log("data",dataid);
    //         if(getnextdata){
    //             getnextdata();
    //         }
    //     },4000);
    
    // }

    // getData(124 ,()=>{
    //     console.log("geting data 2");
    //     getData(2,()=>{
    //         console.log("geting data 3");
    //         getData(3);
    //     });
    // });
    
    // function getData(dataid,getnextdata){
    //     return new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         console.log("data",dataid);
    //           resolve("success");
    //         if(getnextdata){
    //             getnextdata();
    //         }
    //     },4000);
    // });
    
    // }
    
    // const getpromise=()=>{
    //     return new Promise((resolve,reject)=>{
    //         console.log("i am a promise");
    //        resolve("success");
    //       // reject("some error")
    //     })
    // };

    // let promise=getpromise();
    // promise.then((res)=>{
    //      console.log("promise fullfeild",res);
    // })

    // promise.catch((err)=>{
    //     console.log("rejected",err);
    // })

//     function asnyfuntion1(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log("data1");
//                 resolve("success");
//             },4000);
//         });
//     }
//     function asnyfuntion2(){
//         return new Promise((resolve,reject)=>{
//             setTimeout(() => {
//                 console.log("data2");
//                 resolve("success");
//             },4000);
//         });                  
//     }
// console.log("fatching data1....");
//     let p1= asnyfuntion1();
//     p1.then((res)=>{
//         console.log("facthing data2....");
//         let p2=asnyfuntion2();
//         p1.then((res)=>{});
//     })

    //   async function hello(){
    //     console.log("hello");
        
    //   }

     function api(){
        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                console.log("wether data");
                resolve(200);
            },2000);
        });
     }
     async function getweather(){
        await api();
        console.log("wait for")
        await api();
     }

   
