const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');
const removeLogFiles = () => {
    if (fs.existsSync(logsDir)) {
        fs.readdir(logsDir, (err, files) => {
            if (err) {
                return console.error("Error reading directory:", err);
            }
            files.forEach(file => {
                console.log(`Delete files...${file}`);
                fs.unlinkSync(path.join(logsDir, file)); 
            });
            fs.rmdir(logsDir, (err) => {
                if (err) {
                    return console.error("Error removing directory:", err);
                }
            });
        });
    } else {
        console.log("Logs directory does not exist.");
    }
};
removeLogFiles();
