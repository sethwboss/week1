const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon"

let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}

function compare(a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else return 0;
}


function sortPokemon(list) {
  let sortedList = list.sort(compare);
  return sortedList;
}


function doStuffList(data) {
  console.log(data);
  const outputList = document.querySelector('#outputList');
  let pokeList = data.results;
  pokeList = sortPokemon(pokeList);

  pokeList.forEach(pokemon => {
    const listItem = document.createElement('li');
    listItem.textContent = pokemon.name; 
    outputList.appendChild(listItem);
  });

  pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`;
    outputList.innerHTML += html;
  });

}



function doStuff(data) {

  const output = document.querySelector("#output");
  results = data;

  const html = `<h2>${results.name}</h2>
  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;

  output.innerHTML = html
}

getPokemon(url, doStuff);
getPokemon(urlList, doStuffList);
console.log("second: ", results);


