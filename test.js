const fs = require('fs');
const exec = require('child_process').exec;
const blackList = ['event-emmiter.sample.js'];

fs.readdir('./', (error, files) => {
    files.forEach(element => {
        if (element.includes('sample') && !blackList.includes(element)) {
            exec(`node list-filter.sample.js`, (error, stdout, stderr) => {
                if (stderr) {
                    console.error(stderr);
                }
            });
        }
    });
});


