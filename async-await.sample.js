/*
* Obter o usuário
* Obter o numero de telefone do usuário a partir do Id
* Obter o endereço do usuário a partir do Id
*/
function getUser(calback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 001,
                name: `Nelson`,
                birthday: new Date()
            })
        }, 1000)
    });
}

function getPhone(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                number: 1234456753,
                ddd: 11
            })
        }, 2000)
    });
}

function getAddress(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                street: 'Baker Street',
                number: '221B'
            })
        }, 2000)
    });
}

async function main() {
    try {
        const user = await getUser();
        
        const result = await Promise.all([
            getPhone(user.id),
            getAddress(user.id)
        ]);

        const phone = result[0];
        const address = result[1];

        console.log(`
         Nome: ${user.name},
         Endereço: ${address.street} ${address.number},
         Telefone: (${phone.ddd}) ${phone.number}
      `);

    } catch (error) {
        console.log('erro', error);
    }
}

main();
