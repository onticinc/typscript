var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // Enum = Assigns labels to number values. 
// ### Object Types & Key "Type" Pairs (Key Value Pairs)
// ### Using a tuple to define the role property of the person object.
// 
// const person: {
//     name: string;
//     age: number;
//     nickname?: string; // ? makes the property optional
//     hobbies: string[]; // Array
//     role: [number, string]; // Tuple
// } = {
//     name: "Maximilian",
//     age: 30,
//     nickname: "Max",
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "author"]
// };
// Object Types & Key "Type" Pairs (Key Value Pairs)
var person = {
    name: "Maximilian",
    age: 30,
    nickname: "Max",
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
var favoriteActivities;
console.log(person.nickname);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // !!! ERROR !!!
}
