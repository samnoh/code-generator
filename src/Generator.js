const path = require('path');

const File = require('./File');
const { currentPath, directories, config } = require('./constants');

class Generator {
    constructor(params) {
        this.name = params.name;
        this.outDir = params.outDir;
        this.kind = params.typescript ? 'ts' : 'react';
        this.type = params.class ? 'class' : 'functional';
        this.file = new File(
            directories[this.kind][this.type],
            path.join(
                currentPath,
                config.baseDir ? config.baseDir : '',
                this.outDir,
                `${this.name}.${directories[this.kind].ext}`
            )
        );
        this.createTemplate();
    }

    async createTemplate() {
        try {
            let data = await this.file.content;
            data = this.replaceName(data);
            data = this.replaceModules(data);
            this.file.content = data;
        } catch (error) {
            console.error(error);
        }
    }

    replaceName(data) {
        return data.replace(/TEMPLATE_NAME/g, this.name);
    }

    replaceModules(data) {
        let modules = '';
        for (const key in config.modules) {
            modules += `import ${key} from ${config.modules[key]};\n`;
        }
        return data.replace(/MODULES/, modules);
    }
}

module.exports = Generator;
