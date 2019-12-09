const fs = require('fs');

class File {
    constructor(readDir, writeDir) {
        this.readDir = readDir;
        this.writeDir = writeDir;
    }

    read() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.readDir, 'utf8', (error, data) => {
                if (error) reject(error);
                resolve(data);
            });
        });
    }

    write(data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.writeDir, data, error => {
                if (error) reject(error);
                resolve();
            });
        });
    }
}

module.exports = File;
