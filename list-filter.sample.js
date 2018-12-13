//destricting...
const { getPeople } = require('./service');

Array.prototype.myFilter = function (callback) {
    const filtered = [];
    for (item of this) {
        if (callback(item)) {
            filtered.push(item);
        }
    }
    return filtered;
}

async function main() {
    try {
        const results = await getPeople('a');
        const lars = results
            // .filter(item => {
            .myFilter(item => {
                return item.name.toLowerCase().includes('lars');
            }).map(people => people.name);
        console.log('lars', lars);
    } catch (error) {
        console.error('erro interno', error);
    }
}

main();
