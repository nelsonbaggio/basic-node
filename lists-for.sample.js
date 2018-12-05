const service = require('./service');

async function main() {
    try {
        let names = [];
        const result = await service.getPeople('a');
        
        console.time('for');
        for (let i = 0; i < result.results.length; i++) {
            const people = result.results[i];
            names.push(people.name)
        }
        console.timeEnd('for');
        console.log('nomes com for', names);
        
        names = [];
        console.time('for in');
        for (let i in result.results) {
            const people = result.results[i];
            names.push(people.name);
        }
        console.timeEnd('for in');
        console.log('names com for in', names);

        names = [];
        console.time('for of');
        for (people of result.results) {
            names.push(people.name);
        }
        console.timeEnd('for of');
        console.log('names com for of', names);

        names = [];
        console.time('for each');
        result.results.forEach(people => {
            names.push(people.name);
        });
        console.timeEnd('for each');
        console.log('names com for each', names);

    } catch (error) {
        console.error('erro interno', error);
    }
}

main();