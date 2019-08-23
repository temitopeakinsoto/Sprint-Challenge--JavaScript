# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

ANS: map transforms each item in the array and returns a new array of transformed items with same size as that of old array. 
The map() method will also call a provided function on every element in the array. 
The difference is that map() utilizes return values and actually returns a new Array of the same size.

forEach on the other hand, is used whenever we want to iterate over the items 
in an array and do something with the items. forEach method will iterate over a list and 
apply some operation (with side effects to each list member).the forEach() method doesn’t actually return anything (undefined). 
It simply calls a provided function on each element in your array which is allowed to mutate the calling array.

2. What is the difference between a function and a method?

ANS: Both Funtions and Methods are functions in javascript. 
Simply put, A method is a function that belongs to an object. whereas a function is a function(although attached to the global object).

3. What is closure?
ANS: CLOSURE: According to MDN, A closure is the combination of a function and the lexical environment within which that function was declared. In order words, a closure is just a function that has references to the properties of it's outter scope or outter lexical environment.

4. Describe the four rules of the 'this' keyword.
ANS:
  1. When the this keyword is globally used the this object refers to the Window object

  2. When a function is called using the dot notation, the object before that dot is 'this'. 
     therefore when this is used with and object, then 'this' refers to or points to the object's methods and properties attached to that object

  3. Whenever a constructor function is used (and instatiated using the new keyword), 'this' refers to the specific instance of the object that is created and returned by 
     the constructor function.

  4. Whenever the call() or apply() method are used, 'this' is explicitly defined, allowing you to execute a function in different context!

5. Why do we need super() in an extended class?
ANS: We need super in an extended class to be able to invoke or make reference to that class. This makes it possible
for the child class to be able to inherit properties and methods from the parent class.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
