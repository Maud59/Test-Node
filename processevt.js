process.on('exit',()=>{// La fonction exit existe déjà et permet de fermer le programme à la fin des actions
      console.log('Fin du programme')
});

process.on('beforeExit',()=>{// La fonction before exit existe déjà dans node.js
      console.log('Avant fin du programme')
});



console.log('Début du programme')
console.log('Déroulement du programme')