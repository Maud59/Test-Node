/* sur node un fichier = un module
création de nos propres évènements*/

const events = require('events'); // si la bibliothèqe nous appartient, il faudra mettre le chemin. require permet d'importer la bibliothèque
const eventEmitter = new events.EventEmitter();

//Créer et ecouter l'évènement
eventEmitter.on('start', () =>{ // l'évènement ne sera pas écouté tant qu'il ne sera pas émis.
      console.log('Application is starting ...')
});


//Nous avons créé un double event .on, on écoute 2 fois sur le 'start'
eventEmitter.on('start', () =>{ 
      console.log("L'application démarre")
      eventEmitter.emit('end','toto') //On écoute la fonction puis on l'émet tout de suite après pour passer à l'action suivante.
      // il est possible d'inclure des données dans l'emission(comme le toto ici)
});

eventEmitter.on('end',(name)=>{// Le name est à l'écoute de la donnée précédente ('toto')
      console.log("Fin du programme " + name)

})


//Emission de l'évènement
eventEmitter.emit('start'); // Il faut que cet evenement soit déjà existant dans le .on



