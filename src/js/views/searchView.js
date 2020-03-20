import { elements } from './base';

// get the value of the form and export to controller
export const getInput = () => elements.searchInput.value; 

// clear the search input
export const clearInput = () => {
    elements.searchInput.value = "";
};

export const clearSearch = () => {
    elements.searchResList.innerHTML = "";
}

export const renderLocation = location => {
    console.log(location);
    const temp = Math.round(location.result.main.temp)
    const markup = `
        <div>
            <div>${location.result.name}</div>
            <div>${temp}&#8451</div>
        </div>
    `;

    elements.searchResList.insertAdjacentHTML('beforeend', markup);
}


// rendering to the DOM
// export const renderResults = results => {
//     console.log(results);
//     results.forEach(renderLocation);
// };

// FIX: RenderResults not working