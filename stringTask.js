// Count how many times a string has the letter a or A
let str = "Praava Health is a network of Family Health Centers where patients come first. We are building a better Patient experience enabled by technology. We offer consultations with Family Medicine Doctors, Visiting Specialists, A Physiotherapists";
// let match = str.match(/a/g);
// let match2 = str.match(/A/g);
// console.log(match.length)
// console.log(match2.length)
let Count = null;
let Count2 = null;
for(let i = 0; i<str.length; i++){
    if(str[i] === "a"){
        // console.log("")
        Count++;
    }
    if(str[i] === "A"){
        // console.log("")
        Count2++;
    }

}
console.log(Count)
console.log(Count2)



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




// // // Task-3:
// // // Check whether a string contains all the vowels a, e, i, o, u
// let a = "conut how many times a string";
// let vowels = "aeiou";
// let checked = true;
// for (let i = 0; i < vowels.length; i++) {
//     if (a.indexOf(vowels[i]) === -1) {
//         checked = false;
//         break;
//     }
// }

// if (checked) {
//     console.log("String contains all vowels");
// } else {
//     console.log("String is missing one or more vowels");
// }







// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

// let par = "Google X Translate x bangladesh x"
//     let replace = par.replace(/x/g, "y").replace(/X/g, "Y")
//     console.log(replace)





//     Task-5:
// Capitalize Every first Letter of each word in a String


// let par = "Google X Translate x bangladesh x"

// let words = par.split(" ")
// console.log(words)

// let wordsCap = "";
// for (let i = 0; i < words.length; i++) {
//     // console.log()
//     let word = words[i] + " ";
//     // word[0] = 
//     wordsCap += word.charAt(0).toUpperCase() + word.slice("1")
// }
// console.log(wordsCap)
