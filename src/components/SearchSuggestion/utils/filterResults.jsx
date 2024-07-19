export const filterResults = (data, query) => {
    const recommendations = [];

    // Helper function to recursively search through all properties
    function searchAllProperties(item) {
        for (const key in item) {
            if (typeof item[key] === 'object') {
                searchAllProperties(item[key]);
            } else if (item[key] && typeof item[key] === 'string' && item[key].toLowerCase().includes(query)) {
                if (item.description !== undefined && item.imageUrl !== undefined) {
                    recommendations.push(item); // Only add if description and imageUrl are defined
                    // do  not break the loop untill you find all the matching results pissible
                }
            }
        }
    }

    // Search through each category in the data
    for (const category in data) {
        if (Array.isArray(data[category])) {
            data[category].forEach(item => {
                searchAllProperties(item);
            });
        }
    }

    return getUniqueNumbers(recommendations);
}




// unique array

export function getUniqueNumbers(arr) {
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
}
