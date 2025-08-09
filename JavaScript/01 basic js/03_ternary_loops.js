// var a = condition ? "true" : "false"

// console.log(5 > 6 ? 5 : 6);
// console.log(5 < 6 ? (8 >2 ? "true" : "false" ) : 6);

// var a = 6<7? typeof typeof 6 : 78;
// console.log(a)

// 7>8? console.log(2):8==6;
// for(;;)       //infinite
// for(;undefined;) console.log(23);                     //no lloop
for(;0;) console.log(23);                     //no lloooop
for(;false;) console.log(23);                     //no lloooop
// for(;true;) console.log(23);                     //infinite lloooop
for(;null;) console.log(23);                     //no llooop
// for(;10;) console.log(23);                     //infinite lloooop

i=0
for(i--; !(i = 5) ; ) console.log(typeof (i=5))

/*first expression only execute one time it can be any thing initialization or any expression

second expression will check the condition every time and it can also be an expression which returns true or false 

third expression will executes every time till loop runs 

*/

// for(i;i++;i) console.log(i)
// i = 0;
// for(i++; i < 5; i++) console.log(i);
i=0
// for(--i; i < 5; i++) console.log(i);
// for(--i; i; i++) console.log(i);


// console.log(!undefined)          // !undefined is true
// console.log(!console.log(78))

for(console.log(54);console.log(34);console.log(44)) console.log(45)
for(console.log(54);console.log(console.log(!console.log(78)));console.log(44)) console.log(45)

a = [0,8]
// for(a;a[1];i++) console.log(99)

// for in and for of loop
// for(i in a) console.log(a[i])
// for(i of a) console.log(i)

