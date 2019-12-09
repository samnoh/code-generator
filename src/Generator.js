const path = require('path');

const File = require('./File');
const { currentPath, directories, config } = require('./constants');

class Generator {
    constructor(params) {
        this.name = params.name;
        this.outDir = params.outDir;
        this.kind = params.typescript ? 'typescript' : 'react';
        this.type = params.class ? 'class' : 'functional';
        this.template = !!params.template;
        this.file = new File(
            params.template || directories[this.kind][this.type],
            path.join(
                currentPath,
                config.baseDir ? config.baseDir : '',
                this.outDir,
                `${this.name}.${directories[this.kind].ext}`
            )
        );
        this.createTemplate();
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

    replaceOwnVariables(data) {
        if (!this.template) return data;

        for (const key in config.template) {
            data = data.replace(new RegExp(key, 'g'), config.template[key]);
        }
        return data;
    }

    async createTemplate() {
        try {
            let data = await this.file.content;
            data = this.replaceName(data);
            data = this.replaceModules(data);
            data = this.replaceOwnVariables(data);
            this.file.content = data;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Generator;
