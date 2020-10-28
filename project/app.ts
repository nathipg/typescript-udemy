const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // Tuple
} = {
    name: 'Pissuti',
    age: 23,
    hobbies: [
        'Sports',
        'Cooking'
    ],
    role: [2, 'author']
};

let favoriteActivities: any[]; // Avoid
favoriteActivities = ['Sports', 30];

// person.role.push('admin'); // Works
// person.role[1] = 10; // Doesn't work
// person.role = [10, 'admin']; // Works
// person.role = [10, 'admin', 999]; // Doesn't work

console.log(person);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}