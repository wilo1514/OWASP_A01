/*const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config'); // Ruta al archivo de configuración
const User = require('./models/user'); // Modelo de usuario
const { conectar } = require('./db'); // Ruta al archivo de conexión a la base de datos

const app = express();
conectar(config.DB_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/login', async (req, res) => {
    const { username, password} = req.body;
  
    try {
      const user = await User.findOne({ username, password });
  
      if (!user) {
        return res.status(401).json({ error: 'Usuario no encontrado' });
      }
      const isAdmin = user.role === 'admin';
  
      res.json({ isAdmin });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  });

app.post('/users', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    const newUser = await User.create({ username, password, role });

    res.status(201).json({ message: 'Usuario creado correctamente', user: newUser });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

app.use('/', express.static('public'))
const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
*/
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const User = require('./models/user');
const { conectar } = require('./db');

const app = express();
conectar(config.DB_URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });

        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        res.json({ message: `Inicio de sesión exitoso como ${user.role}`, role: user.role });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});
app.post('/users', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    const newUser = await User.create({ username, password, role });

    res.status(201).json({ message: 'Usuario creado correctamente', user: newUser });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});
app.use('/', express.static('public'))
const PORT = config.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

