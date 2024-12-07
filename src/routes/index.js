

var express = require('express');
var router = express.Router();

// Importar el módulo controllers
const controllers = require('../controllers/controllers'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CRUD' });
});




// Rutas de Persona
router.get('/personal', controllers.listPersonal);
router.get('/agregarPersonal', controllers.agregarPersonal);
router.post('/agregarPersonal', controllers.postAgregarPersonal);
router.get('/editarPersonal/:id', controllers.getEditarPersonal);
router.post('/updatePersonal/:id', controllers.postUpdatePersonal);
router.post('/deletePersonal/:id', controllers.postDeletePersonal);
router.get('/buscarPersonal', controllers.buscarPersonal);
router.post('/resultadosPersonal', controllers.buscarPersonalResultados);


//Rutas de Oficina
router.get('/oficinas', controllers.listOficina);
router.get('/agregarOficina', controllers.agregarOficina);
router.post('/agregarOficina', controllers.postAgregarOficina);
router.get('/editOficina/:id', controllers.getEditarOficina);
router.post('/updateOficina/:id', controllers.postUpdateOficina);
router.get('/deleteOficina/:id', controllers.getDeleteOficina);
router.post('/deleteOficina/:id', controllers.postDeleteOficina);
router.get("/buscarOficina", controllers.buscarOficina);
router.post('/resultadosOficina', controllers.buscarOficinaResultados); 



module.exports = router;
 