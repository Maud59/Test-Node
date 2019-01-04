/* L'eventEmitter est ici mis dans une class, il peut être placé n'importe où, du moment qu'on émet sur l'évènement pour récupérer le retour */

const events = require('events')

class Image{
      constructor(){
            this.eventEmitter = new events.EventEmitter();

      }
      do(){
            this.toNb();
            this.crop();
            this.eventEmitter.emit('end')
      }

      //traitements d'image
      toNb(){
            console.log('Changement de couleur en noir et blanc');
      }
      crop(){
            console.log('Recadrage de l\'image');
      }

      // création de la méthode on
      on(eventName,callback){ // il est possible de rajouter un autre event dans une méthode on
            this.eventEmitter.on(eventName,callback)
      }
}
//Utilisation de la méthode créée ci-dessus
const img = new Image();
// On appelle la méthode .on 
img.on('end',() =>{ // event de type end
      console.log('Fin du traitement')
}); 

img.do();