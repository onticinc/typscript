<br />
<br />

# Getting Started 

<br />

*Use work-files/index.html and using-ts.ts files for final example.*

<br />

---

<br />

## Command line installs

<br >


### Install typescript:


```
sudo npm install -g typescript
```
<br />

### Run compiler:
```
 tsc fileName.ts
```


---

<br />

## What is TypeScript

<br />

1. A JavaScript Superset
2. A language building up on Javascript
3. Takes regular Javascript and add's new Features and Advantages to it. 
4. TS cant be use in the browser, it has to be converted to JS. Browser CAN'T execute it. 
5. It is a powerful compiler used to compile TS to JS. Typescript is much more picky than JS... it requires you to build better code. 
6. Features are compiled to JS workarounds, possible errors are thrown. Allowing you to plan for specific scenerios. 
7. Identifies runtime errors and lets you fix them before it becomes a problem. 
8. Get next-gen Javascript features (compiled down for older Browsers)
9. Non JavaScript features like interfaces and Generics
10. Rich configuration options
11. Meta-Programming features like Decorators
12. Modern Tooling that helps even in non TypeScript Projects




---

<br />

## Example 1: Accidently concatinating two strings instead of adding the two numbers togethor. 

<br />

```
function add(num1, num2){
    return num1 + num2
}

console.log(add('2', '3')) // two strings

```

<br />

#### console log result = 23 because it combines the two strings, not adding the number.

#### Typscript fixes the problem of concatinating the two strings and checks that only numbers are being used.

<br />

---

<br />

## Starting code example in the js-only.js file:

<br />

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

<br />

### With this example you could enter any value and it would accept it. It could add two numbers togethor or concatinate two strings togethor. 


## Same Example using typescript.

<br />

```
const button = document.querySelector("button");
    const input1 = document.getElementById("num1")! as HTMLInputElement;
    const input2 = document.getElementById("num2")! as HTMLInputElement;

    function add(num1: number, num2: number) {
        return num1 + num2;
    }

    button.addEventListener("click", function() {
        console.log(add(+input1.value, +input2.value));
    });


```

<br />

1. The ! - Tells TS that the input will never be null.
2. as HTMLInputElement - Tells TS what type of input to be expecting. 
3. num1 : number - Tells TS that the variable can only be a number. 




<br />