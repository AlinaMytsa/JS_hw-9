// task2
// 1.0
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

// 2.0
let a = 2; //4

let x = 1 + (a *= 2); //5

// 3.0
"" + 1 + 0 //1
"" - 1 + 0 //-1
true + false // true/1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 // $45
"4" - 2 //2
"4px" - 2 //NaN
"  -9  " + 5 //-95
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //NaN
" \t \n" - 2 //-2

// 4.0
let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b);


// task3
5 > 4 //true
"ананас" > "яблоко" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false
