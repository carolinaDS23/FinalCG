## Practica Profesionalizante 1

## Docente: Romano Luis 

## Alumno: Garaycoechea Carolina

## URL github: https://github.com/carolinaDS23/FINAL

###

## Proyecto CRUD con Express, NodeJs, MySQL y Docker 

## Resumen de Flujo con Docker
## Clonar el código en la nueva máquina.
## Instalar Docker y Docker Compose.
## Ejecutar docker-compose up --build.
## Comprobar la base de datos desde el contenedor si es necesario.
## Acceder a la aplicación desde http://localhost:3000.



### Características
#### Gestión de personas: Crear, listar, actualizar y eliminar registros de personas.
#### Gestión de oficinas: Crear, listar, actualizar y eliminar registros de oficinas.
#### Buscar: Funcionalidad de búsqueda para encontrar personas y oficinas.
#### Interfaz de usuario: Diseño responsivo usando Bootstrap 5.
#### Dockerización: La aplicación está dockerizada para facilitar su despliegue.

   
### Instalación
#### Prerrequisitos
- Node.js y npm
* Docker y Docker Compose
+ MySQL
- Instalación y configuración
* Clonar el repositorio:

- bash
* Copiar código
+ git clone <URL del repositorio>
- cd project

### Instalar dependencias:

- bash
* Copiar código
+ npm install

#### para ejecutar el programa
![Descripción de la imagen](/src/imgreadme/15.jpg)

#### Nota: Se adjuntaran imagenes del proceso del armado de la app

### Como primer paso hemos instalado npm express-generator -g esto se realiza solo una vez, luego  para generar las plantillas express --view=ejs --git src, (src es la carpeta contenedora deñ proyecto). 

![Descripción de la imagen](/src/imgreadme/1.jpg)

### Luego iniciallizamos nuestro proyecto con git init y creamos un archivo readme.md donde estamos documentando el proceso, con git remote add origin [URL] de github. Previamente habiendo creado el repositorio remoto. 

### git status vemos el estado de nuestro proyecto 
 
### git add . agregamos los archivos que no se han subido 

### git commit -m "mensaje" guardamos los cambios 

### Despues de esto instalamos las dependencias necesarias en este caso Mysql2 con el comadno 
 ### npm install mysql2

![Descripción de la imagen](/src/imgreadme/2.jpg)

### Creamos una Base de Datos llamada empleados y sus tablas personal y oficina en mysql workbench.

![Descripción de la imagen](/src/imgreadme/4.jpg)

### Pasamos al archivo Docker-Compose.yml el cual guardaremos en la carpeta raiz asi como tambien dcker file.  estos crean las imagenes y contenedores para para poder acceder a la aplicacion desde cualquier maquina. 


![Descripción de la imagen](/src/imgreadme/3.jpg)

### Continuamos creando el archivo db.js en el proyecto raiz src, donde este es el que me conecta con la base de datos, y emite mensajes de error y/o conexion a la misma. se ejecuta con 
### npm start si la conexion es exitosa podemos ir a localhost:3000 y vemos lo siguiente 

![Descripción de la imagen](/src/imgreadme/5.jpg)

### Agregamos los cambios hasta el momento para luego incorporar las funcionalidades correspondientes en rutas y controladores y creamos las vistas. 

![Descripción de la imagen](/src/imgreadme/7.jpg)

### Creamos las ramas para luego unirlas a la rama principal 

### git branch feature/personal
#### la creamos 
### git chekout feature/personal
#### nos cambiamos a la rama creada 
### git branch 
#### vemos si estamos ahi 

### despues de hace add . y commit nos pasamos a la rama master y realizamos el merge feature/personal, quedando unida a la rama master. 

### Luego realizamos el tag primera version

### git tag -a v1.0 -m "version 1.0 "

### git push origin v1.0 

### Agregamos el archivo Dockerfile y y construimos nuestra imagen con docker build -t 


![Descripción de la imagen](/src/imgreadme/12.jpg)

### En mi caso como mi sistema operativos es Windows, tuve que descargar docker desktop, luego realizamos una cuenta para loguearnos en docker hub y asi poder ingresar desde la terminal con docker login -u mi usuario y password, con docker image ls y docker ps -a nos permite ver si existe alguna imagen o contenedor en el caso que exista lo detenemos con docker stop y borramos con docker rm y con docker buil -t usuario/nombre y tags luego pusheamos. 



![Descripción de la imagen](/src/imgreadme/14.jpg)


#### Disfruta de la app!!! 

