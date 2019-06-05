const Launcher = require('webdriverio').Launcher;

const wdio = new Launcher('./wdio.conf.js');
wdio.run().then(function (code: any) {
    process.exit(code);
    // process.exit(0);
}, function (error: any) {
    console.error('Launcher failed to start the test', error.stacktrace);
    process.exit(1);
});
