const fs = require('fs');
const exec = require('child_process').exec;
const blackList = ['event-emitter.sample.js'];

fs.readdir('./', (error, files) => {
    files.forEach(element => {
        if (element.includes('sample') && !blackList.includes(element)) {
            console.log('testando exemplo', element);
            exec(`node ${element}`, (error, stdout, stderr) => {
                if (stderr) {
                    console.error(stderr);
                }
            });
        }
    });
});


