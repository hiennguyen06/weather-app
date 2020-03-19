import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        // const url = `http://api.openweathermap.org`;
        // const key = 'cd1b10aadd030765dc1780c5585149f2';
        // const proxy = 'https://cors-anywhere.herokuapp.com/';       
        
        try {
            const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.query}&APPID=cd1b10aadd030765dc1780c5585149f2`);
            this.result = res.data
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}