//Este archivo contendrá toda la logica para operar con los datps -+> BD
const express = require('require');
const router = express.Router();
const db = require('../config/db');

//Utilizando express (framework JS) vamos a utilizar npetidis de acceso
//Localhost:/herramientas
//req => petición del cliente = solicitud
//res => respuesta del servidor = respuesta(JSON)
//obtener
router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM herramientas';
    await db.query(query)
    //Deserializacion, el primer valor
    //El método query devuelve una MATRIZ
    //db.query = [[registros...], [info_query...]]
    const [rows] = await db.query(query);
    //Devolvemos los datos obtenidos como JSON
    res.json({
      success: true,
      data: rows
    });
  }catch (err) {
    //500 = error generado por el servidor
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener las herramientas',
      error: err.message
    });
  }
});

// Insertar
router.post('/', async (req, res) => {
  try {

  }catch (err) {
    //500 = error generado por el servidor
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener las herramientas',
      error: err.message
    });
  }
});

// Actualizar
router.put('/', async (req, res) => {
  try {

  }catch (err) {
    //500 = error generado por el servidor
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener las herramientas',
      error: err.message
    });
  }
});

// Eliminar
router.delete('/', async (req, res) => {
  try {

  }catch (err) {
    //500 = error generado por el servidor
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener las herramientas',
      error: err.message
    });
  }
});