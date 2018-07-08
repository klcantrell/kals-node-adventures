const path = require('path');
const nodemon = require('nodemon');
const browsersync = require('browser-sync').create();

const projectDir = process.env.PWD;

process.chdir(projectDir);

nodemon({
  script: path.join(projectDir, process.argv[2]),
});

browsersync.init({
  port: 8080,
  proxy: 'http://localhost:3000',
});

nodemon.on('restart', () => {
  browsersync.reload();
});

browsersync
  .watch(path.join(projectDir, '/**/*.(pug|css)'))
  .on('change', browsersync.reload);