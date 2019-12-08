const fs = require('fs');
const path = require('path');

const { currentPath, directories, config } = require('./constants');

class Generator {
    constructor(params) {
        this.name = params.name;
        this.outDir = params.outDir;
        this.kind = params.typescript ? 'ts' : 'react';
        this.type = params.class ? 'class' : 'functional';
        this.createTemplate();
    }

    createTemplate() {
        fs.readFile(directories[this.kind][this.type], 'utf8', (error, data) => {
            if (error) throw error;

            data = data.replace(/TEMPLATE_NAME/g, this.name);

            let modules = '';
            for (const key in config.modules) {
                modules += `import ${key} from ${config.modules[key]};\n`;
            }
            data = data.replace(/MODULES/, modules);

            fs.writeFile(
                path.join(
                    currentPath,
                    config.baseDir ? config.baseDir : '',
                    this.outDir,
                    `${this.name}.${directories[this.kind].ext}`
                ),
                data,
                error => {
                    if (error) throw error;
                }
            );
        });
    }
}

module.exports = Generator;
