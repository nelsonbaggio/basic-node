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

getUser().then(user => {
    return getPhone(user.id).then(phone => {
        return {
            user: user,
            phone: phone
        }
    });
})
.then(result => {
    return getAddress(result.user.id).then(adress => {
        result.address = adress;
        return result;
    });
})
.then(result => {
    console.log(`
        Nome: ${result.user.name},
        Endereço: ${result.address.street} ${result.address.number},
        Telefone: (${result.phone.ddd}) ${result.phone.number}
     `);
})