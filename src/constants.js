const path = require('path');

const currentPath = process.cwd();
const templatesDirectory = path.join(__dirname, '..', 'templates');
const directories = {
    react: {
        template: path.join(templatesDirectory, 'react', 'FuncComp.js'),
        ext: 'js'
    },
    ts: {
        template: path.join(templatesDirectory, 'react', 'FuncComp.js'),
        ext: 'ts'
    }
};
const config = require(currentPath + '/package.json').config['code-generator'];

module.exports = {
    currentPath,
    directories,
    config
};
