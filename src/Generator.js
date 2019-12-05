'use strict';

const fs = require('fs');
const path = require('path');
const { currentPath, directories } = require('./constants');
const config = require(currentPath + '/package.json').config.codeGenerator;

class Generator {
    createTemplate({ kind, placeholder }) {
        fs.readFile(directories[kind].template, 'utf8', (error, data) => {
            if (error) throw error;

            data = data.replace(/TEMPLATE_NAME/g, placeholder.name);

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
        name: 'Modal'
    }
});
