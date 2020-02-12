import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

// Global app state
const state = {}

const controlSearch = async () => {
    // 1. Get a query from the view
    const query = searchView.getInput();
    console.log(query);

    // 2. If there is a query, add object to global state
    if (query) {
        state.search = new Search(query);

        // 3. Prepare UI for results

        // 4. Search location
        await state.search.getResults(); // don't forget to call the function

        // 5. Render weather for location
        console.log(state.search.result)
    }
    
};

// EVENT LISTENERS

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

// const search = new Search('Melbourne');
// console.log(search);