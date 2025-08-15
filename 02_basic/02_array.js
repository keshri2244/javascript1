const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman"," flash" , "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  //[ 'thor', 'Ironman', 'spiderman', [ 'superman', ' flash', 'batman' ] ]
 

//  const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


const all_newheros = [...marvel_heros,...dc_heros]
console.log(all_newheros);
