// let demo = document.getElementById('demo')

// function some(some){
//     demo.innerHTML = some
// }

// let myPromise = new Promise(function(res , rej){
//     let x = 0
//     if(x==0){
//         res('OK')
//     }else{
//         rej("errror")
//     }
// })


// myPromise.then(
//     function(value) {some(value);},
//     function(error) {some(error);}
// )

// let isShopOpen = false;

// let time  = new Date().getHours()

// if(time >= 10){
//     isShopOpen = true
// }else if (time>23){
//     isShopOpen = false
// }


// let order = (time , work) =>{
//     return new Promise((res , rej) =>{
//         if(isShopOpen){
//             setTimeout(()=>{
//                 res(work())
//             },time)
//         }else{
//             rej(console.log("err"))
//         }
//     })
// }

// order(2000 , ()=> console.log('fruit choised'))
//     .then(()=>{
//         return order(1000 , ()=> console.log('c started'))
//     })
//     .then(()=>{
//         return order(1000 , ()=> console.log('f chopped'))
//     })
//     .then(()=>{
//         return order(1000 , ()=> console.log('water iced'))
//     })
//     .then(()=>{
//         return order(1000 , ()=> console.log('milk joined'))
//     })
//     .then(()=>{
//         return order(1000 , ()=> console.log('ice cream ready to eat'))
//     })











// let isContainerWorking = true

// let manufacturing = (time , action) =>{
//     return new Promise((resolve , reject) =>{
//         if(isContainerWorking){
//             setTimeout(()=>{
//                 resolve(action())
//             } , time)
//         }else{
//             reject(console.log('container ishlamyapti'))
//         }
//     })
// }

// manufacturing(1000 , ()=>{console.log('kuzov yigish boahlandi')})
//     .then(() =>{
//         return manufacturing( 1000 , ()=>console.log('elektor jihozlar ornatildi'))
//     } )
//     .then(() =>{
//         return manufacturing( 1000 , ()=>console.log('orindiqlar ornatildi'))
//     } )
//     .then(() =>{
//         return manufacturing( 1000 , ()=>console.log('mayda detallar qoyildi '))
//     } )
//     .then(() =>{
//         return manufacturing( 1000 , ()=>console.log('moshina minishga tayyor '))
//     } )












// let isMemberAtHome = false

// let time = new Date().getHours()

// if(time>=20){
//     isMemberAtHome = true
// }else if (8< isMemberAtHome){
//     false
// }

// let cooking = (startCooking , time)=>{
//     return new Promise((resolve , reject) =>{
//         if(isMemberAtHome){
//             setTimeout(()=>{
//                 resolve(startCooking())
//             } , time)
//         }else{
//             reject(console.log('uydagilar uyda emas , demak bizga ovqat kerak emas'))
//         }
//     })
// }

// cooking(()=>console.log('ovqat pishirish boshlandi') , 0)
//     .then(()=>{return cooking(()=>{console.log('gaz yoliqdi')} , 1000)})
//     .then(() =>{
//         return cooking(()=>{
//             console.log('massaliglar solindi')
//         } ,1000)
//     })
//     .then(()=>{
//         return cooking(()=>{
//             console.log('ovqat dimlashga qoyildi')

//         } , 1000)
//     })
//     .then(()=>{
//         return cooking(()=>{
//             console.log('ovqat toyyor suzilmoqda')
//         } , 1000)
//     })
//     .then(()=>{
//         return cooking(()=>{
//             console.log('yesangiz boldi ovqatni')
//         } , 1000)
//     })
















let isHeWantToLEanrProgramming = true
let learning = (startlearning , time)=>{
    return new Promise((resolve , reject) =>{
        if(isHeWantToLEanrProgramming){
            setTimeout(()=>{
                resolve(startlearning())
            } , time)
        }else{
            reject(console.log('dasturlashga qiziqishim yoq, togris'))
        }
    })
}

learning(()=>console.log('dasturlashni organish boshlandi') , 0)
    .then(()=>{return learning(()=>{console.log('faundation oqib tugatildi')} , 1000)})
    .then(() =>{
        return learning(()=>{
            console.log('oson tehnalogiyalar organilmoqda')
        } ,1000)
    })
    .then(()=>{
        return learning(()=>{
            console.log('javascriptni organish boshlandi')

        } , 1000)
    })
    .then(()=>{
        return learning(()=>{
            console.log('frameworklar organilmoqda')
        } , 1000)
    })
    .then(()=>{
        return learning(()=>{
            console.log('siz pro dasturchisiz')
        } , 1000)
    })









