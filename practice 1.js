const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];

// =================================================================
// PROBLEM 1 — Reading Object Properties
// =================================================================
// You are given this movie object. Write code below to:
//   1. Print the title
//   2. Print the director
//   3. Print true/false: is the runtime over 120 minutes?
//   4. Add a new property `watched` set to true
//   5. Print each key-value pair using console.log("Title:", movie.title) style

const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan",
  rating: "PG-13",
  runtime: 169,
};

// TODO 1: Print the movie title
console.log(movie.title);

// TODO 2: Print the director's name
console.log(movie.director);
// TODO 3: Print true/false — is runtime over 120?
if (120<movie.runtime){
    console.log("True");
} else {
    console.log("False");
}

// TODO 4: Add a `watched` property set to true
movie.watch = true;

// TODO 5: Print each key-value pair
console.log("Title:", movie.title);
console.log("Year:", movie.year);
console.log("Director:", movie.director);
console.log("Rating:", movie.rating);
console.log("Runtime:", movie.runtime);
console.log("Watched:", movie.watch);
