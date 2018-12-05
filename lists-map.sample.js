const service = require('./service');

Array.prototype.myMap = function (calback) {
    const newArray = [];
    for (people of this) {
        const result = calback(people);
        newArray.push(result);
    }
    return newArray;
}

async function main() {
    try {
        const result = await service.getPeople('a');

        console.time('map');
        const names = result.results.myMap(people => people.name);
        // const names = result.results.map(people => people.name);
        console.timeEnd('map');

        console.log('names com map', names);
    } catch (error) {
        console.error('erro interno', error);
    }
}

main();