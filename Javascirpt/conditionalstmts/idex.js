var a=99;
var b=75;
console.log(a==b);
a=b
console.log(a===b);
a=10
console.log(a!=b)
a=b
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
 
var a=25
console.log((a%2==0)?"even":"odd");


let age=17.9
console.log((age>=18)?"Adult":"Minor")

var score=56
console.log((score>=90)?"A":((score>=75)?"B":((score>=60)?"C":((score>=45)?"D":"F"))))

var temp=6.78
console.log((temp>=30)?"Hot":((temp<=30 && temp>=20)?"Warm":((temp>=10 && temp<=19)?"Cool":"Cold")));

age=45
console.log((age<=12 && age>0)?"Child":((age<=19 && age>=13)?"Teen":((age>=20 && age<=64)?"Adult":"Senior")));

