#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const path = require('path');

program
    .version('1.0.0')
    .argument('<project-name>', 'name of the project')
    .action((projectName) => {
        console.log(projectName)
        const projectPath = path.resolve(projectName);
        console.log(projectPath)
        if (fs.existsSync(projectPath)) {
            console.error('Project directory already exists!');
            process.exit(1);
        }
        fs.mkdirSync(projectPath);

        // Function to copy folder recursively
        const copyFolderSync = (source, destination) => {
            fs.mkdirSync(destination, { recursive: true });
            const entries = fs.readdirSync(source, { withFileTypes: true });

            for (let entry of entries) {
                const srcPath = path.join(source, entry.name);
                const destPath = path.join(destination, entry.name);

                if (entry.isDirectory()) {
                    copyFolderSync(srcPath, destPath);
                } else {
                    fs.copyFileSync(srcPath, destPath);
                }
            }
        };

        // Copy template folder
        const templatePath = path.join(__dirname, '../template');
        copyFolderSync(templatePath, projectPath);

        console.log('Project created successfully!');
    });

program.parse(process.argv);
