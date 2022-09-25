const fs = require('fs')

fs.copyFile('\styles/main.min.css','homeworks.min.css', (err) => {
    if (err) throw err;
    console.log('source text was copied');
});


