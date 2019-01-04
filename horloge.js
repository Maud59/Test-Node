//créer une horloge qui permet de calculer les heures, les minutes et les secondes

function clockDisplayer(date){
      process.stdout.clearLine();// Permet de supprimer la ligne à partir d'une position
      process.stdout.cursorTo(0);
      const data = date.toLocaleString().split(' ');
      process.stdout.write(data[1]);
}

setInterval(function(){
      clockDisplayer(new Date());
}, 1000);
     