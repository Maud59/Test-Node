//création d'un module qui crée un serveur et fait quelques actions. 
// On démarre notre serveur et on l'écoute sur le port 8000. 
//Ne pas oublier d'appeler notre serveur sur le main.js
const http = require ('http');
module.exports = () => {
      const server = http.createServer((request, response) =>{
            response.writeHead(200);
            response.end('<h1>Coucou</h1>')
      });
      server.listen(8000);
}