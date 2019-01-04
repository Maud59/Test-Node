//console.log(process.argv) Argv permet d'obtenir' les valeurs des arguments

/* on obtient un tableau d'arguments, en premier lieu, on obtient en argument le programme permettant d'executer les actions (en l'occurence node.exe ici), puis le fichier des actions. 

On peut rentrer ensuite les arguments dans la console, et ils seront ajoutés à notre tableau d'arguments. 

*/

//console.log(process.argv[2]) // permet de récupérer l'élément d'index 2 dans notre tableau d'arg (/!\ au zéro)



/*function getFlag(objet){
      for(let i=2; i<process.argv.length;i++){
            if (objet == process.argv[i]){
                  return process.argv[i+1]

            }

      }
}*/

function getFlag(objet,args){
      args = args|| process.argv;
      const index = process.argv.indexOf('--' + objet);
      //return process.argv[index+1];

      if(index === -1){ // Ne trouve aucun index dans le tableau (le -1 est renvoyé quand le parcours d'un tableau ne trouve aucun index de la valeur demandée. )
            throw new Error (`Flag name "${objet}"`); // Nous renvoie l'erreur avec la syntaxe suivante
      }
      return args[index+1]
}

console.log(getFlag('name'));
console.log(getFlag('hello'));

