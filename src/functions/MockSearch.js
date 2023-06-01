import mockData from '../data/names.json';

/**
 * Mock search function.
 * @param {*} query
 * @returns {Array} Search results
 */
export function MockSearch({ query }){
  const searchResults = [];
  const searchTerm = query;
  let count = 0;

  for (let i = 0; i < mockData.mockData.length; i++) {
    const name = mockData.mockData[i];

    if (name.toLowerCase().includes(searchTerm.toLowerCase())) {
      searchResults.push(name);
      count++;

      if (count === 10) {
        break;
      }
    }
  }
  return searchResults;
};
