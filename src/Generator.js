'use strict';

const fs = require('fs');
const path = require('path');
const { currentPath, directories } = require('./constants');
const config = require(currentPath + '/package.json').config['code-generator'];

class Generator {
    constructor() {}

    createTemplate({ kind, placeholder }) {
        fs.readFile(directories[kind].template, 'utf8', (error, data) => {
            if (error) throw error;

            data = data.replace(/TEMPLATE_NAME/g, placeholder.name);

            let modules = '';
            for (const key in placeholder.modules) {
                modules += `import ${key} from ${placeholder.modules[key]};\n`;
            }
            data = data.replace(/MODULES/, modules);

            fs.writeFile(
                path.join(currentPath, `${placeholder.name}.${directories[kind].ext}`),
                data,
                error => {
                    if (error) throw error;
                }
            );
        });
    }
}

const gen = new Generator();
gen.createTemplate({
    kind: 'react',
    placeholder: {
        modules: config.modules,
        name: 'Modal'
    }
});
