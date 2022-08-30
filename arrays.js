const elements = [
  "Arroz",
  "Carne",
  "Leche",
  "Huevos",
  "Avena",
  "Cereala",
  "Legumbres",
];

// Agregar un elemento a la lista
elements.push("Aceite de Girasol");
console.log(elements);

// Eliminar el último elemento de la lista
elements.pop();
console.log(elements);

//

// Objeto de peliculas

const movies = [
  {
    titulo: "Reservoir Dogs",
    director: "Quentin Tarantino",
    year: 1992,
  },
  {
    titulo: "Taxi Driver",
    director: "Martin Scorsese",
    year: 1976,
  },
  {
    titulo: "Gran Torino",
    director: "Clint Eastwood",
    year: 2008,
  },
];

// Filtrado de peliculas posteriores al 1 enero de 1996 (Mi cumpleaños)

const filterMovies = movies.filter((obj) => obj.year > 1996);
console.log(filterMovies);

// Listado que contenga los directores de peliculas.

const dirMovies = movies.map((valor) => `${valor.director}`);
console.log(dirMovies);

// Listado que contenga los nombres de peliculas

const nameMovies = movies.map((valor) => `${valor.titulo}`);
console.log(nameMovies);

// Concatenación de directores y sus peliculas

//opc 1
const concMovies = dirMovies.concat(nameMovies);
console.log(concMovies);

//opc 2
const concMovies2 = movies.map((obj) => {
  let cObj = {};
  cObj[obj.director] = obj.titulo;
  return cObj;
});

console.log(concMovies2);


// Concatenación con propagación

const propMovies = [...dirMovies, ...nameMovies];
console.log(propMovies);