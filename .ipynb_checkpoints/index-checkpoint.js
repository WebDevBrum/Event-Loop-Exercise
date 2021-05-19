const fs = require('fs');


process.on('beforeExit', () => {
    console.log("Print Fifth");
});

// begin polling phase
fs.readFile(__filename, () => {
  process.nextTick(() => {
    console.log("Print Third");

});
});

// timers phase 1
setImmediate(() => {
    console.log('Print Second');
});

// end mainline, pre timers phase
process.nextTick(() => {
    console.log('Print First');
});

// timers phase 2
setTimeout(() => {
    console.log("Print Forth");
}, 5000);

