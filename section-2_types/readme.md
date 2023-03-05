# Typscript Basics and Basic Types

---

# Core Types

1. Number
2. String 
3. Boolean
4. Object Types


## Number Type

All Numbers, no differentiation between integers or floats



## String

1. All Text Values - 'Hi', "Hi", `Hi`

```


```

## boolean

1. True or False
2. No "truthy" or "falsy" values

Example of how Typscript assigns values for numbers or strings.

```



function add(n1: number, n2: number, showResult: boolean, phrase: string){

    const result = n1 + n2;
    if (showResult){
        console.log(phrase + result)
    } else {
    return result;
}}

const number1 = 1;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is:'


add(number1, number2, printResult, resultPhrase);

```


How javascript would handle the same thing

```


function add(n1 + n2){
    if (typeof n1 === 'number' || typeof n2 === 'number'){
        throw new Error('Incorrect input!');`
    }
}


```

## Object


### The first {} assigns the types the second {} assigns the values. 

```
const person: theObject = {
    name: string;
    age: number
} = {
    name: 'Maximilian'
    age: 30
};

```


Any Javascript object, more specific types (type of object) are possible.

## Array

```
const person: theObject = {
    name: string;
    age: number
} = {
    name: 'Maximilian'
    age: 30
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports']

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

```


[1,2.3,]
Any JavaScript array, type can be flexible or strict.

## Tuples

Added by typscript... fixed length array. 

Code snippet exampl of using a tuple to define the role property of the person object. 

```
    const person: {
        name: string;
        age: number;
        nickname?: string; // ? makes the property optional
        hobbies: string[]; // Array
        role: [number, string]; // Tuple

    } = {
        name: "Maximilian",
        age: 30,
        nickname: "Max",
        hobbies: ["Sports", "Cooking"],
        role: [2, "author"]
};
```

## ENUM Type

Added by TypesScript: Automatically enumerated global constant identifiers.

Enum = Assigns labels to number values, number starts at 0, 1, 2, 3.


```
enum Role {ADMIN, READ_ONLY, AUTHOR}; 

const person = {
    name: "Maximilian",
    age: 30,
    nickname: "Max",
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};

let favoriteActivities: string[];

console.log(person.nickname);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // !!! ERROR !!!
}
```

You can also assign values (numbers or strings) to a enum. 

Example:

```
enum Role {ADMIN = 'admin', READ_ONLY = 100, AUTHOR = 200}; 

```


## Any Type

Lets anything go. Should be avoided because it takes away the advantages of TS.

```
any[]

```

## Union Types

1. combine() allows you to combine values of different types.
2. Runtime type checking allows you to validate input types 

```
function combine(input1: number | string , input2: number | string ){
    let result;
    
    // runtime type checking
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}


const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Anna', 'Max');
console.log(combinedNames);

```
