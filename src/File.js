const fs = require('fs');
const path = require('path');
const EventEmitter = require('events').EventEmitter;

class File extends EventEmitter {
    constructor(readDir, writeDir) {
        super();
        this.readDir = readDir;
        this.writeDir = writeDir;
        this.on('write', dir => this.findOrCreateDir(dir));
    }

    findOrCreateDir(dir) {
        const _dir = dir || path.join(this.writeDir, '..');

        if (!fs.existsSync(_dir)) {
            fs.mkdirSync(path.join(_dir), error => {
                if (error) throw error;
            });
        }
    }

    read() {
        return fs.readFileSync(this.readDir, 'utf8', (error, data) => {
            if (error) throw error;
            return data;
        });
    }

    write(data) {
        this.emit('write');
        fs.writeFile(this.writeDir, data, error => {
            if (error) throw error;
        });
    }
}

module.exports = File;
