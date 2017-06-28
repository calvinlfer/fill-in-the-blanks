#!/usr/bin/env node
'use strict';

const cli = require('commander');
const fs = require('fs');
const doT = require('dot');
const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const packageVersion = require('../package.json').version;

cli.version(packageVersion)
    .arguments('<templateFile> <dataFile> <outputFile>')
    .action(async (templateFile, dataFile, outputFile) => {
        doT.templateSettings = {
            evaluate:    /\{\{([\s\S]+?)\}\}/g,
            interpolate: /\{\{=([\s\S]+?)\}\}/g,
            encode:      /\{\{!([\s\S]+?)\}\}/g,
            use:         /\{\{#([\s\S]+?)\}\}/g,
            define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
            conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
            iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
            varname: 'param',
            strip: true,
            append: true,
            selfcontained: false
        };

        const templateFileString = await readFile(templateFile, {encoding: 'utf8'});
        const dataFileString = await readFile(dataFile, {encoding: 'utf8'});
        const data = JSON.parse(dataFileString);
        const template = doT.template(templateFileString);
        const result = JSON.parse(template(data));
        fs.writeFileSync(outputFile, JSON.stringify(result, null, 4));
    });

cli.parse(process.argv);

if (process.argv.length <= 2) {
    console.error('no command given!');
    process.exit(1);
}
