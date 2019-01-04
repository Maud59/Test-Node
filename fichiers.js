// Le readdir va permettre de lister les dossiers, fs.readdir[chemin du fichier,fct de rappel(dans laquelle on va émettre l'evenement)]
// On veut émettre un évènement qui permet d'appeler la fct qui permet d'afficher les fichiers

const fs = require('fs');
const events = require('events')
const eventEmitter = new events.EventEmitter();
let fichiers = [];

fs.readdir('.', function (err, items) { // chemin et argument à prendre
      console.log('Lecture des fichiers ...');
      eventEmitter.emit('readdir', items)
});

eventEmitter.on('readdir', items =>{
      console.log(items)
})


// fichiers.forEach(element => {
//       eventEmitter.on('end', items => {// Le name est à l'écoute de la donnée précédente ('toto')
//             console.log(items)

//       })

// });
// //Utilisation du fs.watch

// const w = fs.watch('.', { encoding: 'buffer' }, (eventType, filename) => {
//       if (filename) {
//             console.log(filename.toString());
//       }
// });
// w.on('change', () => {
//       console.log('hello')
// })
