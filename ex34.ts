
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import fs from 'fs';

//Immutable, Primitive ()
//Asynchronous
//Multithreding
//Promise + await

// let run = async ()=>{
// let value = 0
// console.log("start...")
// await setTimeout(() => {value = 100}, 1000);
// console.log("value:", value)
// }

// async function run()
// {
//     let value = 0
//     console.log("start...")
//     await setTimeout(() => {value = 100}, 1000);
//     console.log("value:", value)
// }
// run()

let server1A = new Promise((resolve) => {
    setTimeout(() => { resolve(100) }, 1000);
});
let server1B = new Promise((resolve) => {
    setTimeout(() => { resolve(200) }, 1000);
});
let server1C = new Promise((resolve) => {
    setTimeout(() => { resolve(300) }, 1000);
});


let server2A = new Promise((resolve) => {
    setTimeout(() => { resolve(400) }, 2000);
});
let server2B = new Promise((resolve) => {
    setTimeout(() => { resolve(500) }, 2000);
});
let server2C = new Promise((resolve) => {
    setTimeout(() => { resolve(600) }, 2000);
});

//hi, 1111 , 200 , end , ["ok", 500]
(async () => {

    console.log("hi")//0
    await server1A
    server1B.then(a =>{ console.log(a)})//2 (200)
    console.log("11111")//1
    await server1C//2
    await server2A//4
    server2B.then(a =>{ console.log(a)})//6 (500)
    console.log("end")//4
    await server2C//6
    console.log("ok")//6


})()

