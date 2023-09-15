const chalk = require('chalk');
const http = require('http');
const host = 'localhost';
const port = 8000; 

const servidor = http.createServer((req, res) => {
    res.writeHeader(200,{'Content-Type': 'application/json'});
    
  const datos = {
    nombre: 'Alejandra Lopez',
    mensaje: '¡Hola! que tengas hoy un lindo y bendecido dia'
  };
  res.end(JSON.stringify(datos));
});

servidor.listen(port, host, () => {
  console.log(chalk.green('El servidor esta corriendo en: ') + host +":" + port);
});

