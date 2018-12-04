/*
* Obter o usuário
* Obter o numero de telefone do usuário a partir do Id
* Obter o endereço do usuário a partir do Id
*/
function getUser(calback) {
    setTimeout(() => {
        return calback(null, {
            id: 001,
            name: `Nelson`,
            birthday: new Date()
        })
    }, 1000)
}

function getPhone(id, callback) {
    setTimeout(() => {
        return callback(null, {
            number: 1234456753,
            ddd: 11
        })
    }, 2000)
}

function getAddress(id, callback) {
    setTimeout(() => {
        return callback(null, {
            street: 'Baker Street',
            number: '221B'
        })
    }, 2000)
}

getUser((error, user) => {
    if (error) {
        console.log("erro ao carregar usuário");
        return;
    }
    getPhone(user.id, (error1, phone) => {
        if (error1) {
            console.log("erro ao carregar telefone");
            retrn;
        }
        getAddress(user.id, (error2, address) => {
            if (error2) {
                console.log("erro ao carregar endereço");
                return;
            }
            console.log(`
                Nome: ${user.name},
                Endereço: ${address.street} ${address.number},
                Telefone: (${phone.ddd}) ${phone.number}
            `);
        })
    })
});
