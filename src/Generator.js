const path = require('path');

const File = require('./File');
const { currentPath, directories, config } = require('./constants');

class Generator {
    constructor({ name, outDir, typescript, classBased, template }) {
        this.name = name;
        this.outDir = outDir;
        this.kind = typescript ? 'typescript' : 'react';
        this.type = classBased ? 'class' : 'functional';
        this.template = !!template;
        this.file = new File(
            template || directories[this.kind][this.type],
            path.join(
                currentPath,
                config.baseDir ? config.baseDir : '',
                this.outDir,
                `${this.name}.${directories[this.kind].ext}`
            )
        );
    }

    replaceDefaultVariables() {
        // name and modules
        let modules = '';
        for (const key in config.modules) {
            modules += `import ${key} from ${config.modules[key]};\n`;
        }
        this.data = this.data
            .replace(/MODULES/, modules.slice(0, -1)) // remove last \n
            .replace(/TEMPLATE_NAME/g, this.name);
    }

    replaceTemplateVariables() {
        if (!this.template) return;

        for (const key in config.template) {
            this.data = this.data.replace(new RegExp(key, 'g'), config.template[key]);
        }
    }

    static async createTemplate(params) {
        const gen = new Generator(params);

        try {
            gen.data = await gen.file.read();
            gen.replaceDefaultVariables();
            gen.replaceTemplateVariables();
            await gen.file.write(gen.data);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = Generator.createTemplate;
