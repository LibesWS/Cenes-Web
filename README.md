# Guía básica de como modificar la página

Esta pequeña guía fue escrita con el fin de hacer más accesible la modificación básica de la pagina web en distintos casos, todos los cambios realizados se aplicarán en la página en un par de minutos.


## Estructura

Para realizar las modificaciones debemos de conocer como está estructurada la página, para identificar los documentos a los cuales se les va a aplicar la modificación.

| Página | Documento |
|--|--|
| Inicio | index.html |
|¿Quienes somos?|sobre-nosotros.html|
|Actividades|actividades.html|
|Inscripciones|inscripcion.html|
|Galería|galeria.html|
|Contacto|contacto.html|

En los archivos se van a observar distintas lineas de este tipo:

    <!-- !============== Texto ================! -->

Estos van a indicar las distintas secciones de la página. Por ejemplo, en la página de inicio se encuentran las secciones de "Niveles de estudio", "Horarios", "Actividades", entre otros, pues serán identificados de esa forma para mayor facilidad al momento de modificar.

A parte de los documentos html, también nos encontramos distintas carpetas, estas contienen los recursos de la página, es decir, las imágenes y los documentos.

| Carpeta| ¿Qué hace? |
|--|--|
| css | Estilos de la página (No tocar) |
| img |Todos las imágenes utilizadas en la página|
| req|Documentos necesarios para la inscripción |
| readme|Imágenes usadas en esta guía |

Cabe destacar que la carpeta de img tiene varias subcarpetas que se refieren a cada una de las mostradas en la galería.

## Modificación
 
 1. ### Párrafos y Títulos

Antes de modificar, debemos conocer las etiquetas a las cuales se refieren cada una de estas, en este caso:

| Etiqueta | ¿Qué es? |
|--|--|
| H1 | Título de primer nivel |
| H2 | Título de segundo nivel |
| H3 | Título de tercer nivel |
| P | Párrafo|

Para la modificación de estos tipos de textos debemos de identificar el documento y la sección a editar, los pasos serian los siguientes:
1. Identificar y abrir el archivo a modificar. <br> ![Guía Texto](./directory_1/directory_2/.../directory_n/plot.png)
2. Clickear en " edit this file "
3. Buscar el *elemento* (lo que esta dentro de la etiqueta) y modificarlo 
4. Clickear en “Commit Changes” y darle una descripción al cambio que se esta realizando.

 2. ### Otros archivos

* #### Como subir archivos:

1. Dirigirse a la carpeta donde quieren subir la imagen o archivo
2. Clickear "add file" y  seguido "upload file"
3. Arrastran el archivo a subir y poner un mensaje para indicar que cambió se realizó
4. Dirigirse al archivo recién subido y darle click a "Copy path" para copiar la ruta del archivo

* #### Como actualizarlas:

1. Identificar y abrir el archivo a modificar.
2. Clickear en " edit this file "
3. Buscar el _elemento_ a editar
* En caso de ser una imagen modificar el atributo <br> "src="_Pegar aquí la ruta del archivo_""
* En caso de ser un botón modificar el atributo <br> "href="_Pegar aquí la ruta del archivo_""
