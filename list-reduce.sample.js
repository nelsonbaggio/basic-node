const { getPeople } = require('./service');

async function main(){
    try {
        const { results } = await getPeople('a');
        const heights = results.map(people => parseInt(people.height));
        console.log('alturas', heights);
        const total = heights.reduce((acc, current) => acc + current, 0); //0 - valor default (primeiro elemento)
        console.log('total', total);
    } catch (error) {
        console.error('erro interno', error);
    }
}

main();