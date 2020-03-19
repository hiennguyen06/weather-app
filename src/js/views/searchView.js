import { elements } from './base';

// get the value of the form and export to controller
export const getInput = () => elements.searchInput.value; 

export const renderLocation = location => {
    console.log(location);
    const markup = `
        <div>
            <p>The weather is cold in london ${location.result.main.temp}</p>
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