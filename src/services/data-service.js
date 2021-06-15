export const getJewels = () => {
    return new Promise((resolve, reject) => {
        fetch('/data/data.json')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
}

export const postSelectedJewels = (selectedJewels, userData) => {
    return true;
}