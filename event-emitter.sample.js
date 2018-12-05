const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
const event = 'user:click';

myEmitter.on(event, click => {
    console.log('O usuário clicou', click);
})

const stdin = process.openStdin();
stdin.addListener('data', value => {
    console.log('Você digitou:', value.toString().trim());
})