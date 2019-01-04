exports.getFlag = (objet,args)=>{
      args = args|| process.argv;
      const index = process.argv.indexOf('--' + objet);
      //return process.argv[index+1];

      if(index === -1){ // Ne trouve aucun index dans le tableau (le -1 est renvoyé quand le parcours d'un tableau ne trouve aucun index de la valeur demandée. )
            throw new Error (`Flag name "${objet}"`); // Nous renvoie l'erreur avec la syntaxe suivante
      }
      return args[index+1]
}
