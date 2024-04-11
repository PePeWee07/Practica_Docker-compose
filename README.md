Proyecto API REST en Spring Boot con Docker
Descripción del Proyecto
Este proyecto es una implementación de un API REST desarrollado utilizando Spring Boot, gestionado por Maven como sistema de gestión de dependencias. La aplicación está configurada para trabajar con una base de datos PostgreSQL y está completamente dockerizada para facilitar el despliegue en diferentes entornos, incluyendo desarrollo y producción.

Características
API REST: Implementa funcionalidades básicas de un API REST para manipular datos de usuarios, permitiendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
Spring Boot: Utiliza Spring Boot para simplificar la configuración y el despliegue de la aplicación.
Maven: Emplea Maven para la gestión de dependencias y la construcción del proyecto.
PostgreSQL: Integra PostgreSQL como sistema de gestión de bases de datos, ideal para trabajar con grandes volúmenes de datos y operaciones complejas.
Dockerización del Proyecto
El proyecto hace uso intensivo de Docker, proporcionando una forma robusta y consistente de desplegar la aplicación y la base de datos en cualquier entorno:

Dockerfile: Construye una imagen Docker de la aplicación Spring Boot, asegurando que todas las dependencias necesarias estén incluidas.
Docker Compose: Utiliza docker-compose para definir y coordinar los servicios necesarios para la aplicación. El archivo docker-compose.yml incluye:
Servicio de Aplicación: Define el proceso para construir la imagen de la aplicación Spring Boot a partir del Dockerfile.
Servicio de Base de Datos: Utiliza la imagen oficial de PostgreSQL y configura el puerto y las variables de entorno necesarias para su ejecución.
Persistencia de Datos: Configura un volumen Docker para la persistencia de datos de PostgreSQL, asegurando que los datos no se pierdan entre reinicios del contenedor.
Entornos de Desarrollo y Producción
El uso de Docker y Docker Compose facilita la transición entre entornos de desarrollo y producción, manteniendo las configuraciones lo más similares posible y asegurando que el entorno de desarrollo sea un reflejo fiel del entorno de producción.

Cómo Usar
Para poner en marcha el proyecto localmente, simplemente se debe clonar el repositorio y ejecutar docker-compose up. Esto construirá las imágenes necesarias para la aplicación y la base de datos, y luego iniciará los contenedores. La persistencia de la base de datos está gestionada a través de volúmenes Docker, permitiendo que los datos se mantengan entre las ejecuciones del contenedor.
