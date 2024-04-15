# Usa una imagen base de Java. 
FROM openjdk:17-jdk-alpine

# Establece el directorio de trabajo dentro del contenedor.
WORKDIR /app

# Copia el archivo .jar compilado en tu directorio de trabajo en el contenedor.
COPY target/dockerisez.postgresql-0.0.1-SNAPSHOT.jar java-app.jar

# El comando para ejecutar tu aplicación.
CMD ["java", "-jar", "java-app.jar"]
