 //1.ways to print javaScript
 //console.log("Hello Wrold");
 //alert("me");
 //document.write("this is document write");


 //2.javaScript console API
 //  console.log("Hello Wrold", 5 + 6, "Another Log");
 //  console.warn("this a Warning");
 //  console.error("this an error");



 //3.JavaSCript Variables
 //What Are DataValues?? Container To storage Datavalues

 var number1 = 50;
 var number2 = 10;
 console.log(number1 + number2);

 //  4.Data Types In JavaScript

 //Number
 var num1 = 555;
 var num2 = 34.56;



 //String
 var str1 = "This is a String";
 var str2 = 'This is an another String';

 //Objects

 var Marks = {

     sumon: 45,
     saad: 40,
     Niloy: 30.97

 }


 //Booleans
 var a = true;
 var b = false;

 console.log(a, b);

 //  var und = undefined;
 var und;
 console.log(und);

 var n = null;
 console.log(n);

 /*
 At a very high Level There are two types of DataTypes in JavaScript
 1.Premitive Data Types: Undefined,null,number,string,boolean,symbol
 2.Reference Data Types:Arrays and Objects
 */

 //  var arr = [1, 2, 3, 4, 5, "SUMON"]

 //operator in javaScript
 //Arithmatic Operators
 var a = 100;
 var b = 10;

 console.log("The Value of a + b is =", a + b);
 console.log("The Value of a - b is =", a - b);
 console.log("The Value of a * b is =", a / b);
 console.log("The Value of a / b is =", a / b);

 //Assignment Operators
 var c = b;
 //  c += 2;
 //  c -= 2; //c = c-2
 //  c *= 2;
 //  c /= 2;
 //  console.log(c);


 //Compsrison Operators
 var x = 34;
 var y = 56;
 //  console.log(x == y);
 //  console.log(x >= y);
 //  console.log(x > y);
 //  console.log(x < y);

 // Logical Opereators


 // And
 //  console.log(true && true);
 //  console.log(true && false);
 //  console.log(false && true);
 //  console.log(false && false);


 //Logical or

 //  console.log(true || true);
 //  console.log(true || false);
 //  console.log(false || true);
 //  console.log(false || false);



 //Logical Not

 //  console.log(!false);
 //  console.log(!true);


 //Functions in JuvaScrpt



 function avg(a, b) {
     c = (a + b) / 2;
     return c;
 }

 //DRY - Do Not Repeat Yourself
 c1 = avg(4, 6);
 c2 = avg(14, 6);
 //  console.log(c1, c2);

 //Conditionals in JavaScript
 //  var age = prompt("Enter your age: ");
 var age = 32;

 //  //Single if satement
 //  if (age > 18) {
 //      console.log("You Are Illigible");
 //  }

 //if else statement
 //  if (age > 18) {
 //     console.log("You Are Illigible")
 // }

 //  else {
 //      console.log("You are not allow")
 //  }

 // if else ladder

 //  if (age > 32) {
 //      console.log("You are not a Kid");
 //  } else if (age > 26) {
 //      console.log("You are not child");
 //  } else if (age > 22) {
 //      console.log("You are not child");
 //  } else if (age < 18) {
 //      console.log("You are not 18+");
 //  } else {
 //      console.log("Error");
 //  }




 //Loop for

 var arr = [1, 2, 3, 4, 5, 6, 7];
 console.log(arr);
 //  for (var i = 0; i < arr.length; i++) {

 //      if (i == 2) {
 //  break;
 //          continue; // 2 itration cancel 
 //      }
 //      console.log(arr[i]);
 //  }

 //Another Method

 //  arr.forEach(function(element) {
 //      console.log(element);

 //  })

 //While loop

 let j = 0;
 //  const ac = 0;
 //   ac++;
 //  ac = ac + 1;

 //  while (j < arr.length) {
 //      console.log(arr[j]);
 //      j++
 //  }

 //  do {
 //      console.log(arr[j]);
 //      j++;

 //  } while (j < arr.length);

 let myarr = ["Fan", "Camera", 34, null, true];

 //Array Methods
 //  console.log(myarr.length);
 //  myarr.pop();//remove last element
 //  myarr.push("sumon"); Add values
 //  myarr.shift() //remove first element
 //  const newlen = myarr.unshift("sumon") //const is variable
 //  console.log(newlen); //add on first element
 //  console.log(myarr);

 //String Methods in Javascript

 let mystring = "My name is Sumon is";
 //  console.log(mystring.length);
 //  console.log(mystring.indexOf("is")); //check where is "is"
 //  console.log(mystring.lastIndexOf("is"));//if you want can check double whice is in last

 //  console.log(mystring.slice(0, 6)); //slicing method
 //replace values
 //  d = mystring.replace("Sumon", "saad");
 //  console.log(d);


 mydate = new Date();
 //Know date day
 //  console.log(mydate);
 //in seconds
 //  console.log(mydate.getTime());
 //full year
 //  console.log(mydate.getFullYear());
 //  console.log(mydate.getDay());
 //  console.log(mydate.getMinutes());
 //  console.log(mydate.getHours());

 //Dom Manipulation

 let elem = document.getElementById('click');
 console.log(elem);

 let elemclass = document.getElementsByClassName('container')
 console.log(elemclass);
 //  elemclass[0].style.background = "yellow"; //change background color
 //  elemclass[0].classList.add("bg-primary");
 //  elemclass[0].classList.add("text-success");
 //  elemclass[0].classList.remove("text-success");
 //  console.log(elemclass[0].innerHTML);

 //  console.log(elemclass[0].innerText);

 tn = document.getElementsByTagName("button");
 console.log(tn);
 createElement = document.createElement('p');
 createElement.innerText = "This is create para";
 tn[0].appendChild(createElement);
 createElement1 = document.createElement('b');
 createElement1.innerText = "This is create para bold";
 //  tn[0].appendChild(createElement1);
 //  tn[0].replaceChild(createElement1, createElement);

 //Selcecting Using Query

 sel = document.querySelector('.container')
 console.log(sel)

 sel1 = document.querySelectorAll('.container')
 console.log(sel1)


 //Events in JavaScript

 //onclicked event

 //  function clicked() {
 //      console.log("This button is clicked")
 //  }

 //  window.onload = function() {
 //      console.log("The document was loaded");
 //  }

 //  firstContainer.addEventListener('click', function() {
 //      document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
 //      console.log("click on Container");
 //  })


 //  firstContainer.addEventListener('mouseover', function() {
 //      console.log("Mouse on Container ");
 //  })

 //  firstContainer.addEventListener('mouseout', function() {
 //      console.log("Mouse out of Container ");
 //  })

 //  let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
 //  firstContainer.addEventListener('mouseup', function() {
 //      document.querySelectorAll('.container')[1].innerHTML = prevHTML;
 //      console.log("Mouse up of Container ");
 //  })


 //  firstContainer.addEventListener('mousedown', function() {
 //      document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"

 //      console.log("Mouse down of Container ");
 //  })

 //Arrow Function
 //  function sum(a, b) {
 //      return a + b;
 //  }
 sum = (a, b) => {
     return a + b;
 }


 //timeout delay time
 logkoro = () => {
     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
     console.log("I am Your Log")
 }
 clr = setTimeout(logkoro, 5000);
 //  use clr to clear Timeout
 //setinterval
 //  setInterval(logkoro, 2000);
 //  clr = setInterval(logkoro, 2000);//off the programme


 //  JavaSrcip LocalStorage console dirct
 //  localStorage.setItem("name", "Sumon")
 //  localStorage
 //  localStorage.getItem("name")
 //localStroge.removeItem('name')
 //localStroge.clear()
 //no single code
 //  obj = { name: "Sumon", length: 1, a: { this: "That" } }
 //  jso = JSON.stringify(obj);
 //  console.log(jso)

 //  parsed = JSON.parse(`{ "name": "Sumon", "length": 1, "a" : {   "this": "That" } }`)
 //  console.log(parsed);


 //Template literals backtrick

 a = 34;
 console.log(`this is my ${a}`)