function sayHello(name: string): string { // Le 2e string est le type de retour
      return 'Hello' + name;
}

console.log(sayHello('toto'));

// la commande fichier > tsc -w permet d'avoir des modifications automatiques lors de chgt sur nos fichiers