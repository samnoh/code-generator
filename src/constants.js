const path = require('path');

const currentPath = process.cwd();
const templatesDirectory = path.join(__dirname, '..', 'templates');
const directories = {
    react: {
        ext: 'js',
        functional: path.join(templatesDirectory, 'react', 'FuncComp.js'),
        class: path.join(templatesDirectory, 'react', 'ClassComp.js')
    },
    typescript: {
        ext: 'ts',
        functional: path.join(templatesDirectory, 'typescript', 'FuncComp.ts'),
        class: path.join(templatesDirectory, 'typescript', 'ClassComp.ts')
    }
};
const packageConfig = require(currentPath + '/package.json').config || {};
const config = packageConfig.codegen || {};

module.exports = {
    currentPath,
    directories,
    config
};
