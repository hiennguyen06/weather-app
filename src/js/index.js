import Search from './models/Search'

// async function getResults(cityName) {
//     // const url = `http://api.openweathermap.org`;
//     // const key = 'cd1b10aadd030765dc1780c5585149f2';
//     // const proxy = 'https://cors-anywhere.herokuapp.com/';       
    
//     try {
//         const res = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},uk&APPID=cd1b10aadd030765dc1780c5585149f2`)
//         const result = res.data.main.temp
//         console.log(result);
//     } catch (error) {
//         alert(error);
//     }
// };
// getResults('London');

const search = new Search('London');
console.log(search);
search.getResults();