const path = require('path')
const fs = require('fs')

fs.readdir(path.join(__dirname, 'public/html'), (err, files) => {
    if(err) throw err
    fs.writeFile(path.join(__dirname, 'public/data/pages.json'), JSON.stringify(files, null, '    '), (err) => {
        if(err) throw err
        console.log('file created')
    })
})