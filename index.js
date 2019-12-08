#!/usr/bin/env node

const program = require('commander');

const Generator = require('./src/Generator');
const { config } = require('./src/constants');

program
    .option(
        '-n, --name [name]',
        'Defines the name of component you would like to generate',
        config.defaultName || 'Component'
    )
    .option('-o, --outDir [directory]', 'Defines rlative directory where it generates files', '/')
    .option(
        '-t, --typescript',
        'If you would like to generate typescript files',
        config.typescript || false
    )
    .option(
        '-c, --class',
        'If you would like to generate class-based components',
        config.classBased || false
    )
    .parse(process.argv);

new Generator(program);
