const path = require('path');

const currentPath = process.cwd();
const templatesDirectory = path.join(__dirname, '..', 'templates');
const directories = {
    react: {
        template: path.join(templatesDirectory, 'react', 'FuncComp.js'),
        ext: 'js'
    }
};

module.exports = {
    currentPath,
    directories
};
