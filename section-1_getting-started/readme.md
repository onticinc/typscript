# Getting Started 

---

## What is TypeScript
1. A JavaScript Superset
2. A language building up on Javascript
3. Takes regular Javascript and add's new Features and Advantages to it. 
4. TS cant be use in the browser, it has to be converted to JS. Browser CAN'T execute it. 
5. It is a powerful compiler used to compile TS to JS. Typescript is pickier thank JS so it requires you to build better code. 
6. Features are compiled to JS workarounds, possible errors are thrown. Allowing you to plan for specific scenerios. 
7. Identifies runtime errors and lets you fix them before it becomes a problem. 

---

## Example 1: Accidently concatinating two strings instead of adding the two numbers togethor. 

```
function add(num1, num2){
    return num1 + num2
}

console.log(add('2', '3')) // two strings
// result = 23 because it combines the two strings, not adding the number.

```

## Typscript fixes the problem of concatinating the two strings and checks that numbers are being used.

---

## Use index.html and using-ts.ts files for example of how this would be a problem with an input form. 

Starting code example is a .js file.

```
const button = document.querySelector('button);
conts input1 = document.getelElementByID("num1);
const input2 = document.getElementById('num2);

function add(num1, num2){
    return num1 + num2;
}

button.addEventListener("click", function(){
    console.log(add(input.value, input2.value));
});

```


