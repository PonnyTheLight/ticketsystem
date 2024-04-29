import fs from 'fs'

fs.rename('./dist/server/entry.mjs', './dist/server/entry.js', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});