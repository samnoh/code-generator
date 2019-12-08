const fs = require('fs');

class File {
    constructor(readDir, writeDir) {
        this.readDir = readDir;
        this.writeDir = writeDir;
    }

    get content() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.readDir, 'utf8', (error, data) => {
                if (error) reject(error);
                resolve(data);
            });
        });
    }

    set content(data) {
        fs.writeFile(this.writeDir, data, error => {
            if (error) throw error;
        });
    }
}

module.exports = File;
