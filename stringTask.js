

// // Count how many times a string has the letter a or A
// let small = 0;
// let Capital = "";
// let  p = "Count how many A times a satring has the letter aA ."
// for(let i=0; i<p.length; i++){
//     // console.log(p[i])
//     if(p[i] === "a"){
//         small++; 
//     }else if(p[i] === "A"){
//         Capital += p[i]
//     }
// }
// console.log(small)
// console.log(Capital.length)




// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

let p = "Count how many times a string has the letter aA paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."

// for(let i = 0; i<= p.length; i++){
//     console.log(p[i])
//     if(p[i] === "a"){

//     }
// }





// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

// let par = "Google X Translate x bangladesh x"
//     let replace = par.replace(/x/g, "y").replace(/X/g, "Y")
//     console.log(replace)




//     Task-5:
// Capitalize Every first Letter of each word in a String
let par = "Google X Translate x bangladesh x"
let words = par.split(" ")

for(let i=0; i<words.length; i++){
    // console.log()
    let word = words[i]
    let cap = word.charAt(0).toUpperCase() + word.slice("1")
}