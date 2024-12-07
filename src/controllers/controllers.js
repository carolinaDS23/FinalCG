

const listPersonal = (req, res, next) => {
    const db = req.app.get("db");
    const query = "SELECT * from personal";
    db.query(query, function (err, rows) {
        if (err) {
            console.log(err);
            return;
        }
        res.render("listPersonal", { listPersonal: rows, title: "Lista de personal" });
    });
};

const agregarPersonal = (req, res, next) => {
    res.render('agregarPersonal', { title: "Agregar personal" });
};

const postAgregarPersonal = (req, res, next) => {
    const db = req.app.get("db");
    const nombre = req.body.nombre;
    const email = req.body.email;
    const oficina_id = req.body.oficina_id;
    const query = "INSERT into personal(nombre, email, oficina_id) VALUES (?, ?, ?)";
    db.query(query, [nombre, email, oficina_id], function (err) {
        if (err) {
            console.log(err);
            return;
        }
        res.redirect("/personal");
    });
};

const getEditarPersonal = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    db.query("SELECT * FROM personal WHERE id= (?)", [id], function (err, row) {
        if (err) {
            console.error(err);
            return;
        }
        res.render('editarPersonal', { item: row[0], title: "Editar persona" });
    });
};

const postUpdatePersonal = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    var nombre = req.body.nombre;
    var email = req.body.email;
    var oficina_id = req.body.oficina_id;
    db.query("UPDATE personal SET nombre=?, email=?, oficina_id= ? WHERE id=?", [nombre, email, oficina_id, id], function (err) {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/personal');
    });
};

const getDeletePersonal = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    db.query("SELECT * FROM personal WHERE id=?", id, function (err, rows) {
        if (err) {
            console.error(err);
            return;
        }
        res.render('borrarPersonal', { item: rows[0], title: "Borrar" });
    });
};

const postDeletePersonal = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    db.query("DELETE FROM personal WHERE id=?", id, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/personal');
    });
};


const buscarPersonal = (req, res, next) => {
  res.render('buscarPersonal', { title: "Buscar Personal" });
};

const buscarPersonalResultados = (req, res, next) => {
  const db = req.app.get("db");
  const keyword = req.body.keyword;

  const query = 'SELECT nombre, email FROM personal WHERE nombre LIKE ?';
  db.query(query, [`%${keyword}%`], (err, rows) => {
    if (err) {
      console.error(err);
      return next(err);
    }

    res.render('resultadosPersonal', { personal: rows, title: "Resultados de búsqueda" });
  });
};








//OFICINAS

const listOficina= (req, res, next) => {
    const db = req.app.get("db"); //para llamar la bd que creamos en app.js y conectarnos
    const query = "SELECT * from oficina"; // seleccion en la tabla persona
    db.query(query, function(err, rows){ //llama a la bd selecciona todos los elementos, se crea una funcion con 2 parametros err(error) y rows(filas)
    if(err){
      console.log(err);
      return;
    } 
    res.render("oficinas", {oficinas:rows, title:"Lista de la oficina"}); //creo un objeto oficina y devuelvo filas
    });
  };
  
  const agregarOficina= (req, res, next) => {
    res.render('agregarOficina', {title:"Agregar oficina"});
  };
  
  const postAgregarOficina= (req,res,next) => {
    const db = req.app.get("db");
    const denominacion =req.body.denominacion;
    const query = "INSERT into oficina(denominacion) VALUES (?)";
    db.query(query, [denominacion], function(err){
      if(err){
        console.log(err);
        return;
      }
      res.redirect("/oficinas");
    });
  };
  
  const getEditarOficina = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    db.query("SELECT * FROM oficina WHERE id= (?)", [id], function(err, row){
      if(err){
        console.error(err);
        return;
    }
      res.render('editOficina', {item: row[0], title:"Editar oficina"});
    });
  };
  
  const postUpdateOficina = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    var denominacion = req.body.denominacion;
    db.query("UPDATE oficina SET denominacion=? WHERE id=?", [denominacion , id], function(err) {
    if (err) {
        console.error(err);
        return;
    }
    res.redirect('/oficinas');
    });
  };
  
  const getDeleteOficina = (req, res, next) => {
    var db = req.app.get('db');
    var id = req.params.id;
    db.query("SELECT * FROM oficina WHERE id=?", id, function(err, rows) {
        if (err) {
            console.error(err);
            return;
        }
        res.render('borrarOficina', { item: rows[0], title: "Borrar" });
    });
  }
  
  const postDeleteOficina = function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    db.query("DELETE FROM oficina WHERE id=?", id, function(err) {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/oficinas');
    });
  };
  
  const buscarOficina = (req,res, next) => {
    res.render('busquedaOficina',  {title: "Buscar"});
  };
  
  const buscarOficinaResultados = (req, res, next) => {
    var db= req.app.get("db");
    var keyword = req.body.keyword;
    const query = 'SELECT * FROM oficina WHERE denominacion LIKE ?'; 
    db.query(query, [`%${keyword}`], (err, rows) => {
      if(err) throw err;
      res.render('resultadosOficina', {oficinas: rows, title: "Resultados"})
    });
  };





  module.exports = {

    listPersonal,
    agregarPersonal,
    postAgregarPersonal,
    getEditarPersonal,
    postUpdatePersonal,
    getDeletePersonal,
    postDeletePersonal,
    buscarPersonal,
    buscarPersonalResultados,
  


    listOficina,
    agregarOficina,
    postAgregarOficina,
    getEditarOficina,
    postUpdateOficina,
    getDeleteOficina,
    postDeleteOficina,
    buscarOficina,
    buscarOficinaResultados
  
  };
