const fs = require("fs-extra");
const { version } = require('../package.json');

console.log(`# builder tools ${version}`);

function findFiles(root, cb) {

  const folders = [];
  const visited = [];

  folders.push(root);

  while(folders.length > 0) {
    const next = folders.shift();
    const entries = fs.readdirSync(next);
    entries.forEach( (entry) => {
      const loc = next + '/' + entry;
      const file = fs.lstatSync(loc);
      if(file.isDirectory()) {
        folders.push(loc);
      }
      cb(file, loc);
    });
  }
}


function report(bundleId) {
  const segments = bundleId.split(':');
  const version = segments.pop();
  const bundle = segments.join('-');
  console.log(`${bundle}=${version}`)
}

findFiles('./builder/src/main/features', (file, location) => {
  if(!file.isDirectory() && location.endsWith('.json')) {
    const data = fs.readJSONSync(location);
    data?.bundles?.forEach( (entry) => {
      report(entry.id)
    });
    if(data?.prototype?.id) { report(data?.prototype?.id); }
  }
})