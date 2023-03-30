'use strict';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com',
//   },
// };

// fetch(
//   'https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&contains=C%2523&idRange=0-150&blacklistFlags=nsfw%2Cracist',
//   options
// )
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

// import { get } from './node_modules/axios/dist/axios/';

// async function getJoke() {
//     try{

//         const response = await fetch('https://v2.jokeapi.dev/joke/Any');
//         const data = await response.json()
//       if(data.error){
//           throw new Error(data.error)
//       }
//       let joke;

//       if(data.joke){
//           joke = data.joke
//       }else {
//           joke= `${data.setup} ${data.delivery}`
//       }

//         return joke;
//       }

//     }

//     async function main() {
//         const joke = await getJoke();
//         console.log(joke);
//       }
// main();

// import axios from './node_modules/axios/dist/axios.js';
// import { create } from 'axios';

// const instance = create({
//   baseURL: 'https://api.example.com',
//   timeout: 5000,
// });

// instance
//   .get('/data')
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// async function getJoke() {
//   const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
//   const joke =
//     response.data.joke || `${response.data.setup} ${response.data.delivery}`;
//   return joke;
// }

// async function main() {
//   const joke = await getJoke();
//   console.log(joke);
// }

// main();

let button = document.querySelector('.generate-joke');

button.addEventListener('click', getJoke);

async function getJoke() {
  let config = {
    headers: {
      Accept: 'application/json',
    },
  };

  let a = await fetch('https://icanhazdadjoke.com/', config);
  let jokeObj = await a.json();

  document.getElementById('forJoke').innerText = jokeObj.joke;
}
