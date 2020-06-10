/* let name = prompt("What is your name")
let Age = prompt("How old are you?")
let current = prompt("What is your current Level")

alert("Your name is " +" "+ name +" "+"your age is"+Age +"" +"and your current level is"+" "+current) */

/* let Age = prompt("How old are you?")

if(Age<=30){
    alert("Your Young")
}else{
    alert("Your old")
} */
/* 
let lga = new Array("Hong", "Mubi-North", "Michika", "Madagali", "Yola-North")

for (i=0; i<lga.length; i++){
document.write(lga.length)
} */

function test(x,y){
    z=x*y
    return z
}

//document.write(test(5,5))


//let category = new category("25", "45", "10", "65")

function category(young, old, youngest, older){
    this.young =  young
    this.old = old
    this.youngest = youngest
    this.older = older
}

document.write("Category"+this.young)




