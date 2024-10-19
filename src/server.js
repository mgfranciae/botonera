// server.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Cargar las variables del archivo .env
dotenv.config();

// Crear una instancia de Express
const app = express();

// Configurar el puerto desde .env o usar el puerto 4040 por defecto
const PORT = process.env.PORT || 4040;

// Configurar la carpeta de vistas y el motor de plantillas (views)
app.set('views', path.join(__dirname, 'ui', 'views'));
app.set('view engine', 'ejs');
console.log(path.join(__dirname,  'ui', 'views'));
// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'ui', 'public')));

// Ruta de bienvenida que redirige a la vista de ejecución
app.get('/', (req, res) => {
    res.render('common/welcome', { title: 'Bienvenido a la Botonera' });
});

// Ruta para la vista de ejecución
app.get('/execution', (req, res) => {
    res.render('execution/execution', { title: 'Modo Ejecución' });
});

// Ruta para la vista de edición
app.get('/edit', (req, res) => {
    res.render('edit/edit', { title: 'Modo Edición' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
