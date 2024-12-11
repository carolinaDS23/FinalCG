const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'empleados'
});

// Definir el SQL para crear la tabla oficina
const createTableOficinaSQL = `
    CREATE TABLE IF NOT EXISTS oficina(
        id INT AUTO_INCREMENT PRIMARY KEY,
        denominacion VARCHAR(45) NOT NULL
    )
`;

// Definir el SQL para crear la tabla personal
const createTablePersonalSQL = `
    CREATE TABLE IF NOT EXISTS personal (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(45) NOT NULL,
        email VARCHAR(45) NOT NULL,
        oficina_id INT NOT NULL, 
        FOREIGN KEY (oficina_id) REFERENCES oficina(id)
    )
`;

// Conectar al servidor
db.connect((err) => {
    if (err) {
        console.log("Error en la conexión al servidor");
        return;
    }
    console.log("Conexión exitosa al servidor");

    // Verificar si existe la base de datos y crearla si no existe
    db.query("CREATE DATABASE IF NOT EXISTS empleados", (err) => {
        if (err) {
            console.log("Error al crear la base de datos");
            console.log(err);
            return;
        }
        console.log("Base de datos creada o ya existente");

        // Seleccionar la base de datos
        db.query("USE empleados", (err) => {
            if (err) {
                console.log("Error al seleccionar la base de datos");
                console.log(err);
                return;
            }
            console.log("Base de datos seleccionada");

            // Crear la tabla oficina
            db.query(createTableOficinaSQL, (err) => {
                if (err) {
                    console.log("Error al crear la tabla oficina");
                    console.log(err);
                    return;
                }
                console.log("Tabla oficina creada o ya existente");

                // Crear la tabla personal después de crear la tabla oficina
                db.query(createTablePersonalSQL, (err) => {
                    if (err) {
                        console.log("Error al crear la tabla personal");
                        console.log(err);
                        return;
                    }
                    console.log("Tabla personal creada o ya existente");
                });
            });
        });
    });
});

module.exports = db;
