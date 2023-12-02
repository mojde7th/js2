let yyy = 700;
let zzz = 60;
console.log(yyy + zzz);
console.log(String(yyy) + zzz);
let bl = Boolean([]);
let bl2 = Boolean({});
console.log(bl);
console.log(bl2);
let h = 10;

let hh = 90;
let result = h > hh;
let result2 = h !== "10";
console.log(typeof result);
console.log(result2);
let x = 10;
let y = 20;
console.log(Math.PI);
console.log(Math.cos(Math.PI));
console.log(Math.cos(Math.PI / 2));
let sum = x + y;
let sub = x - y;
let mul = x * y;
let div = x / y;
let rem = x % y;
let pow = x ** y;
console.log(
  "*** sum of 10 and 20 is " +
    sum +
    "*** sub of 10 and 20 is " +
    sub +
    "*** mul of 10 and 20 is " +
    mul +
    "*** div of 10 and 20 is " +
    div +
    "*** rem of 10 and 20 is " +
    rem +
    "*** pow of 10 and 20 is " +
    pow
);
x += y;
console.log("x is 10 and y is 20 x+=y is x=10+20, so x is: ", x);
x -= y;
console.log("x is  now 30 and y is 20 x-=y is x=30-20, so x is: ", x);
x *= y;
console.log("x is now 10 and y is 20 x*=y is x=10*20, so x is: ", x);
x /= y;
console.log("x is now 200 and y is 20 x/=y is x=200/20, so x is: ", x);
x %= y;
console.log("x is now 10 and y is 20 x%=y is x=10%20, so x is: ", x);
console.log(x / 5);
let firstName = "turaj";
let lastName = "armin";
let fatherName = "ali";
let age = 35;
console.log("my name is:" + firstName + " and my age is " + age);
console.log(lastName);
console.log(fatherName);
console.log(age);
console.log(
  `my name is ${firstName} and my lastname is ${lastName} and now backtick is used for concating ${age} and ${fatherName}`
);
console.log(
  `${document.write(
    'This is from template string with this comand: `${document.write("*****")}`'
  )}`
);
let mypromt1 = prompt(
  "My question is do you remember the timer?",
  "My default answer which is like placeholder is yes"
);
let mypromt2 = prompt("your name:", ".....");
console.log(
  `${mypromt2} Your answer was: ${mypromt1} but from 46th charcter substring to end is:  ${mypromt1.substring(
    46
  )}`
);
console.log(
  `typeof mypromt1: ${typeof mypromt1} and type of myprompt2 is ${typeof mypromt2}`
);
let xx = 10;
let yy = 20;
let sumsum = xx + yy;
console.log(sumsum);
xx = "30";
yy = "40";
let cas = xx + yy;
console.log(cas);
let t = "30";
let k = +30;

console.log(
  `type of t let t= "30" is ${typeof t} and type of k let k=+30 is ${typeof k}`
);
let flt = "399.43";
let parsflt = parseInt(flt);
let parsflt2 = parseFloat(flt);
let parssum = parsflt + parsflt2;
console.log(parsflt);
console.log(parsflt);
console.log(parssum);
console.log(
  `my variable is let flt = "399.43"; ${flt} and with function let parsflt = parseInt(flt);  answer is ${parsflt} 399 and with let parsflt2 = parseFloat(flt); the result be: ${parsflt2} which is 399.43 and type of both: ${typeof parsflt} and ${typeof parsflt2}`
);
let v = prompt("x....", "---");
console.log(
  `let v=prompt("x....","---") and type of v is: ${typeof v} and when typeof Number(v) it is: ${typeof Number(
    v
  )}`
);
console.log(typeof Number(v));
let xn = prompt("xn...!", "--");
let yn = prompt("yn...!", "--");
console.log("xn+yn is:" + xn + yn);
let zn = +prompt("z...", "---");
let zn2 = +prompt("zn2...", "---");
console.log(`let zn = +prompt("z...", "---");
let zn2 = +prompt("zn2...", "---"); then zn+zn2 is: ${zn + zn2}`);
let Numberprompt1 = prompt("xx...!", "---");
let Numberprompt2 = prompt("yy...!");
console.log(`let Numberprompt1 = prompt("xx...!", "---");
let Numberprompt2 = prompt("yy...!"); sum is:  ${
  Numberprompt1 + Numberprompt2
}`);
let Numberprompt11 = Number(prompt("my num...!"));
let Numberprompt22 = Number(prompt("yy...!"));
console.log(
  `let Numberprompt11 = Number(prompt("my num...!")); let Numberprompt22 = Number(prompt("yy...!")); sum is: ${
    Numberprompt11 + Numberprompt22
  }`
);
let txs = 0b11001111;
console.log(t);

let g = 0xff;
console.log(g);
