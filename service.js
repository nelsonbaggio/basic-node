const axios = require('axios');
const URL = 'https://swapi.co/api/people';

const getPeople = async name => {
    const url = `${URL}/?search=${name}&format=json`
    const response = await axios.get(url);
    return response.data.results.map(projectPeople);
}

const projectPeople = people => {
    return {
        name: people.name,
        height: people.height
    }
}

module.exports = {
    getPeople
}