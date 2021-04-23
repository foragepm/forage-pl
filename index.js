var forage = require('foragepm/lib/forage');
var fetch = require('node-fetch');
var async = require('async');

(async () => {
  var db = forage.connectDB()
  await forage.connectIPFS(db);

  var q = async.queue(async function(pkg) {
    var {version, cid} = await forage.importLatest(pkg.manager, pkg.name)

    if(version && cid){
      console.log('Added', manager, name, version, `(${cid})`)
    } else {
      console.log('Failed to add', manager, name, version)
    }
  }, 5)

  var response = await fetch('https://ipfs.ecosystem-dashboard.com/forage')

  var text = await response.text();
  var pkgs = JSON.parse(text)

  pkgs.forEach(function(pkg) {
    q.push(pkg);
  });

  var response = await fetch('https://filecoin.ecosystem-dashboard.com/forage')

  var text = await response.text();
  var pkgs = JSON.parse(text)

  pkgs.forEach(function(pkg) {
    q.push(pkg);
  });

  await q.drain()
  console.log('Finished')

  await db.close()
  process.exit(0)
})();
