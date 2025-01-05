//1.What will the following code output?
 let x = 5;
while (x < 3)
 {
    console.log(x);
    x++;
}
// //a) 5
// // b) 3
// // c) No output (ans c)
// // d) 5, 6, 7... (Infinite loop)

// //2. What will be the result of the following code?

 let y = 0;
do {
    console.log(y);
    y++;
} while (y < 2);
// a) 0
// b) 0, 1 (ans:b)
// c) 1, 2
// d) No output

// 3. Which statement is true about the difference between while and do...while loops?
// a) while loops execute at least once, while do...while loops may not execute at all.
// b) do...while loops execute at least once, while while loops may not execute at all.
// c) Both while and do...while loops execute at least once.
// d) Neither loop guarantees execution of the code block.
//  ans:b
//  Explanation:
// While Loop:

// The condition is checked before the code block is executed.
// If the condition evaluates to false at the start, the code block will not execute even once.
// Do...While Loop:

// The code block is executed first, and then the condition is checked.
// This guarantees that the code block will execute at least once, even if the condition is false initially.

//4. What will the following code print?
 count = 5;
do {
    console.log(count);
    count--;
} while (count > 0);

// a) 5, 4, 3, 2, 1  ans:a
// b) 5
// c) 4, 3, 2, 1
// d) No output


// 5. Which of the following loops will execute the code block at least once, even if the condition is initially false?
// a) while loop
// b) do...while loop  (A do...while loop executes the code block at least once because the condition is checked after the code block is executed.)
// c) for loop
// d) for...in loop

// ans:b

//6. What will be the output of the following code?
let z = 0;
while (z < 3) {
    console.log(z);
    z++;
}
// a) 1, 2, 3
// b) 0, 1, 2  (ans:b)
// c) 0, 1, 2, 3
// d) No output

// 7. What is the primary difference between the while loop and the do...while loop?
// a) The while loop checks the condition before the code block runs, while the do...while loop checks the condition after.
// b) The do...while loop runs only once, while the while loop runs indefinitely.
// c) The while loop checks the condition after the code block runs, while the do...while loop checks it before.
// d) There is no difference between the two loops.
//ans:a 

//8. What will be the output of this code?
i1 = 0;
while (i1 < 5) {
    console.log(i1);
    if (i1 === 3)
       break;
    i1++;
}
// a) 0, 1, 2, 3, 4
// b) 0, 1, 2, 3  (ans:b)
// c) 0, 1, 2
// d) Infinite loop

// 9. Which of the following is the correct usage of a do...while loop?
// a) while (condition) { do { // code } }
// b) do { // code } while (condition);  (ans:b)
// c) do while (condition) { // code }
// d) while (condition) do { // code };


//10. What will be the output of the following code?
 a = 0;
do {
    console.log(a);
    a++;
} while (a < 0);
// a) 0  (ans:0)
// b) 1
// c) No output
// d) Infinite loop


// Write a code to below questions 

// Write a while and do while loop that prints the numbers from 1 to 5 in the console.
 x1=0
do{
    x1++;
    console.log(x1);
}
while(x1<5)

// How would you exit a while loop if a specific condition is met (e.g., when the number equals 3), Write a example code?
x=1;
while(1<=3)
{
    console.log(3)
    break
}

//Write a while and do while loop that prints numbers from 1 to 10, but skips printing the any number from 1 to 10 .

 i=0;
do{
    i++;
    console.log(i)
    continue
}
while(i<10)

//Write a while loop that prints all even numbers from 0 to 20.

i=0;
while(i<=20){
    if (i%2==0){
      console.log(i);
      
    }
    i++;
    
}

// Write a code for below questions using Conditional Statements

// Write an if statement in JavaScript that checks if a number is greater than 10, and prints "Number is greater than 10" if true.

x=15;
if(i>10){
    console.log("number is greater than 10")
}
else{
    console.log("number is greater tan 10 or less")
}

//Write an if-else statement that checks if a number is even or odd, and prints "Even" if it's even, or "Odd" if it's odd.

 i=20;
if(i%2==0)
{
   console.log("even")
}
else
{
   console.log("odd")
}

// Write an if-else if-else ladder that checks the value of a variable grade and prints:
// "A" for grades 90 and above,
// "B" for grades 80 to 89,
// "C" for grades 70 to 79,
// "F" for grades below 70.

 isgrade=85;
if(isgrade>=90){
    console.log("A for grades 90 and abaove")
    
}
else if(isgrade>=80 && isgrade<90)
{
   console.log("B for gardes 80 to 89")
}
else if(isgrade>=70 && isgrade<80)
{
    console.log("c for grades 70 to 79")
}
else{
    console.log("F for grades below 70")
}

//Write a nested if statement that checks if a number is positive and, if true, checks if it's even or odd.

 i=25;
if(true){
    console.log(i)
    if(i%2==0)
    {
        console.log("even")
    }
    else{
        console.log("odd")
    }
}

//Rewrite the following code using if else statement :
                // let age = 20;
                //  console.log(age >= 18 ? "Adult" : "Minor");


age=20;
if(age>=18){
    console.log("adult")
}
else{
    console.log("monor")
}

//Write an if statement that checks if a number is between 10 and 20 (inclusive). Print "In range" if true, otherwise print "Out of range".

i=15;
if(i<=20){
    console.log("In range")
}
else{
    console.log("out of range")
}

//What is the difference between == and === in an if statement in JavaScript? Provide an example where each would behave differently.
  x=6;
  str=6;
 if(x==str)
 {
    console.log(" equal")
 }
 else{
    console.log(" not equal")
 }
 if(x===str){
    console.log(" equal are same type")
 }
 else{
    console.log("not equal are not same type")
 }


 //Write an if statement that checks if a number is between 10 and 20 or if it's exactly 30, and prints "Condition met" if true.
i=26;
if(i<=30){
    console.log("condition met")
}
else{
    console.log("condition not met")
}





