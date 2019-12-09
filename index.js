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
    .option(
        '-o, --outDir [directory]',
        'Defines relative directory where it generates a component',
        '/'
    )
    .option(
        '-t, --typescript',
        'If you would like to generate a typescript component',
        config.typescript || false
    )
    .option(
        '-c, --class',
        'If you would like to generate a class-based component',
        config.classBased || false
    )
    .option('-T, --template [directory]', 'If you would like to use your own template ', null)
    .parse(process.argv);

new Generator(program);
