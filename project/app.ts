const person = {
    name: 'Pissuti',
    age: 23,
    hobbies: [
        'Sports',
        'Cooking'
    ]
};

let favoriteActivities: any[]; // Avoid
favoriteActivities = ['Sports', 30];

console.log(person);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}