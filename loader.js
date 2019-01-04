//Exercice du loader
//Placer les caractères dans un tableau et répeter les éléments du tableau en fonction du compteur. 

let counter =0;
let chars =['-','\\','|','/'];//Deux \\ pour dire qu'il s'agit du caractère.

setInterval(function(){
      if (counter === chars.length){
      counter =0;
      };
      process.stdout.write(`\r${chars[counter]} loading ...`); //$=template string
      counter++;

},1000/15)// répétition avec un intervalle de temps



