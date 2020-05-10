/*
*  Require the fs module
*
*  Making and removing directories is similar to read and write files
*
*  There is an async and sync version of each
*
*  Sync:
*     1) mkdirSync('dirName')
*     2) rmdirSync('dirName')
*
*  Async:
*     1) mkdir('dirName', () => {})
*     2) rmDir('dirName');
*/

const fs = require('fs');

// fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');

fs.mkdir('dirName', () => {
    fs.rmdir('dirName', () => {});
});

/*
* Delete file: use the unlink method
*
* fs.unlink('filePath', () => {});
*/

fs.unlink('./result.txt', () => {})
