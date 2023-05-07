const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'files');
const folderCopy = path.join(__dirname, 'files-copy');

fs.rm(folderCopy, {
  recursive: true, force: true
}, (err) => {
  if (err) throw err;
  fs.readdir(folder, {
    withFileTypes: true
  }, (err, files) => {
    if (err) throw err;
    fs.mkdir(folderCopy, {
      recursive: true, force: true
    }, err => {
      if (err) throw err;
      console.log('Folder successfully created');
      files.forEach(file => {
        fs.copyFile(path.join(__dirname, 'files', file.name),
          path.join(__dirname, 'files-copy', file.name),
          (err) => {
            if (err) throw err;
          });
      });
    });
  }
  );
});