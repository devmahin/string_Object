// let str = "I am mahin";
// console.log(str.length)
// console.log(str[3])
// console.log(str[3])


// let arr = [10, 20, 30, 40,50, 60, 70, 80, 90]
// console.log(arr[3])
// console.log(arr[1])
// console.log(arr[5] = 1000)
// console.log(arr)
// console.log(arr.length)


// toLowerCase()
// let reg = "mahin";
// let login = "Mahin";
// if(reg.toLowerCase() === login.toLowerCase()){
//     console.log("Login")
// }else{
//     console.log("wrong")
// }



// trim()
// let reg = "mahin ";
// let login = "Mahin   ";
// if(reg.trim().toLowerCase() === login.trim().toLowerCase()){
//     console.log("Login")
// }else{
//     console.log("wrong")
// }




// // string use slice
// let str = "i am a mahin howlader . i am in class BA .";
// let str1 = "How old are you?"
// let str2 = str.slice(2, 20)
// console.log(str2)
// let splitFun = str.split(" ").reverse().join(" ");
// console.log(str.includes("mahin"));
// console.log(splitFun);
// console.log(str.concat(str1))




// loop reverse
let str = "i am a mahin howlader . i am in class BA .";

// of loop
// let rev = "";
// for(let sen of str){
//     // console.log(sen)
//     rev = sen + rev;
// }
// console.log(rev.split(" "))

// for loop
let rev = "";
for(let i=0; i<= str.length; i++){
    let revSen = str[i];
    rev = revSen + rev;

}
console.log(rev)
