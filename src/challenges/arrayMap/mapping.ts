/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
type Nums = number

const nums: Nums[] = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here
export const result: Nums[] = nums.map((num): Nums => {
  return num * num;
})



/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/
type Names = string

const names: Names[] = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
export const capitalized: Names[] = names.map((name): Names => {
  return name.charAt(0).toUpperCase() + name.slice(1)
})



/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/
type Pokemon = string

const pokemons: Pokemon[] = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here
export const wrapHTML: Pokemon[] = pokemons.map((pokemon): Pokemon => {
  return `<p>${pokemon}</p>`
})
