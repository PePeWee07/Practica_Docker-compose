# Usa una imagen base de Java. 
FROM openjdk:17-jdk-alpine

# Establece el directorio de trabajo dentro del contenedor.
WORKDIR /app

# Copia el archivo .jar compilado en tu directorio de trabajo en el contenedor.
COPY target/dockerisez.postgresql-0.0.1-SNAPSHOT.jar java-app.jar

# Exponer el puerto en el que la aplicación se ejecutará.
EXPOSE 8080

# Monitorear la salud del contenedor.
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 CMD curl -f http://localhost:8080/actuator/health || exit 1

# Crear y usar un usuario no root.
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

# El comando para ejecutar tu aplicación.
CMD ["java", "-jar", "java-app.jar"]






# Crear y usar un usuario no root
# RUN addgroup -S spring && adduser -S spring -G spring: Este comando crea un grupo y un usuario llamado spring en el contenedor.

# addgroup -S spring: Crea un grupo de sistema llamado spring.
# adduser -S spring -G spring: Crea un usuario de sistema llamado spring y lo agrega al grupo spring.
# USER spring:spring: Cambia al usuario spring para ejecutar los siguientes comandos y la aplicación.