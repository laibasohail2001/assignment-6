// CHAPTER 21-25//
// TASK # 1//
// var firstname=prompt("enter your first name")
// var lastname=prompt("enter your last name")
// var fullname;
// fullname=firstname+lastname;
// alert(" HELLO " + fullname);
// TASK # 2//
// var mobile=prompt("enter your favourite mobile model")
// var length=mobile.length;
// document.write("My favourite mobile model is: " + mobile + "  " +  " \n Length of the string is:" + length);
// TASK # 3//
// var name= 'pakistani'
// var firstChar = name.indexOf("n");
// document.write("<h1>STRING: " + name + "<br>")
// document.write("index of n is: " + firstChar)
// TASK # 4//
// var str='Hello World'
// var lastindex=str.lastIndexOf('l');
// document.write("<h1>STRING: " + str + "<br>")
//  document.write("last index of l is: " + lastindex);
// TASK # 5//
// var name= 'pakistani'
// var firstChar = name.charAt(3);
//  document.write("<h1>STRING: " + name + "<br>")
// document.write("letter at index 3 is: " + firstChar)
// TASK 6//
// var firstname=prompt("enter your first name")
//  var lastname=prompt("enter your last name")
 
//  alert(" HELLO " + firstname + lastname);
// TASK # 7//
// var city="Hyderabad"
// var replacement=city.replace("Hyder","Islam");
// document.write("<h1> CITY: " + city + "<br>")
// document.write("After replacement: " + replacement)
// TASK # 8//
// var message = 'Ali and Sami are best friends. They play cricket and football together';
// for(var i=0;i<message.length;i++)
// {
    
//     var message=message.replace('and','&')
// }
// document.write(message);
// TASK # 9//
//  var value='427'
//  var b=parseInt(value);
//  document.write("value: " + value + "<br>");
//  document.write("type: string <br>");
//  document.write("value: " + b + "<br>")
// document.write("type : number")
// TASK # 10//
// var small='peanuts'
// var capital=small.toLocaleUpperCase();
// document.write("user input:" + small + "<br>")
// document.write("upper case: " + capital)
// TASK # 11//
// var userinput='javascrpit'
// var titlecase=userinput.replace('j','J')
// document.write("user input: " + userinput + "<br>")
// document.write("title case: " + titlecase)
// TASK #12//
// var num=35.35;
// var str=num.toString();
// document.write("number: " + num + "<br>")
// document.write("result: " + str + "<br>")
// TASK # 13//
// var username=prompt("enter the username")
// var not=username.charCode;

// for(var i=0; i<username.length;i++)
// {
//     if(username.slice(i,i+1)== '!' || username.slice(i,i+1)=='@' || username.slice(i,i+1)==',' || username.slice(i,i+1)=='.' )
//     {
//         alert("please enter a valid username")
//     }
    
// }
// TASK # 14//
// var arr=['cake','cookie','pateries','chips','patties']
// var search=prompt("welcome to ABC bakery.. enter the item you want")
// search=search.toLowerCase();
// var items=arr.indexOf(search);
// if(arr.indexOf(search!=-1))
// {
//     alert(search + " is available at " + items + " in our bakery")
// }
// else
// {
//     alert("not available")
// }
// TASK # 15//
// var password=prompt("enter a password")



   
   
// }
// TASK # 16//
// var university='University Of Karachi'

// for( var i=0;i<university.length;i++)
// {
//     document.write(university[i] + "<br>")
// }
//TASK # 17//
// var userinput=prompt("enter a value")
// document.write(userinput.slice(-1))
//TASK 18//
// var str='the quick brown fox jumps over the lazy dog';

// if(str1==='the')
// {
// occurence=occurence+1;
// }
// document.write("Text: the quick brown fox jumps over the lazy dog " + " <br> " + " occurence of the is: " + occurence)
//CHAPTER 26-30//
//TASK #1//
// var input=prompt("enter a number")
// var c=Math.round(input)
// var a=Math.floor(input)
// var b=Math.ceil(input)
// document.write("number: " + input + "<br>")
// document.write("round off value: " + c + "<br>")
// document.write("floor value: " + a + "<br>")

// document.write("ceil value: " + b + "<br>")
// TASK #2//
// var input=prompt("enter a number")

// var a=Math.floor(input)
//var c=Math.round(input)
// var b=Math.ceil(input)
// document.write("number: " + input + "<br>")
//document.write("round off value: " + c + "<br>")
// document.write("floor value: " + a + "<br>")

// document.write("ceil value: " + b + "<br>")
//TASK # 3//
// var number=prompt("enter a number")
// var b=Math.abs(number);
// document.write("the absolute value of " + number + " is " + b)
// TASK # 4//
// var min=1; 
//     var max=6;  
//     var random = 
//     Math.floor(Math.random() * (+max - +min)) + +min; 
//     document.write("Random Number Generated : " + random );  
// TASK # 5//
// var a=Math.random();
// if(a<0.5)
// {
//     document.write("random coin value is heads")
// }
// else
// {
//     document.write("random coin value is tails")
// }
// TASK # 6//
// var a=Math.random()*101;
// var b=Math.floor(a);
// document.write("random numbers between 1-100 is: " + b);
//TASK # 7//
// var wieght=prompt("enter yout weight")
// var b=Number.parseFloat(wieght)
// document.write("the weight of the user is: " + b)
// TASK # 8//
// var a=Math.random()*11;
// var c=Math.floor(a);
// var b=prompt("enter a number")
// if(c==b)
// {
//     alert("congratulation your number is correct")
// }
// else
// {
//     alert("try again")
// }
//CHAPTER 31-34//
// TASK # 1//
// var a=new Date();
// document.write(a)
//TASK # 2//
// var a=new Date();
// var b=a.toString();
// var c=b.slice(4,7);
// document.write("the current month is: " + c)
//TASK # 3//
// var a=new Date();
//  var b=a.toString();
//  var c=b.slice(0,3);
//  alert("TODAY IS: " + c)
//TASK # 4//
// var a=new Date();
//  var b=a.toString();
//  var c=b.slice(0,3);
//  if(c=='Sun' || c=='Sat')
//  {
//      alert("its a fun day")
//  }
//  else
//  {
//      alert("no fun day")
//  }
//TASK # 5//
// var a=new Date();
//  var b=a.toString();
//  var c=b.slice(8,10);
//  document.write(c)
// if(c >= '1' || c<='15')
// {
//     alert("first 15 days of the month")
// }
// else
// {
//     alert("last 15 days of the month")
// }
// TASK # 6//
// var minutes= new Date();
// var minmilli=minutes.getTime();
// var minutesconvert=minmilli/(1000*60*60)
// document.write("current date: " + minutes + "<br>")
// document.write("elasped milliseconds since january 1,1970: " + minmilli+ "<br>");
// document.write("elasped time since january 1,1970: " + minutesconvert + "<br>");
// TASK # 7//
// var b= new Date();
// var a=b.getHours();
//  if(a>=1 && a<=12)
//  {
//      alert("its AM")  
//  }
//  else
//  {
//      alert("its PM")
//  }

 