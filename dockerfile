# Usa una imagen base de Maven para la construcción del proyecto.
FROM maven:3.8.4-openjdk-17-slim AS build

# Establece el directorio de trabajo dentro del contenedor.
WORKDIR /app

# Copia los archivos de Maven y descarga las dependencias.
COPY pom.xml .
COPY .mvn .mvn
RUN mvn dependency:go-offline

# Copia el código fuente del proyecto y compila la aplicación.
COPY src ./src
RUN mvn clean package -DskipTests

# Usa una imagen base de Java para ejecutar la aplicación.
FROM openjdk:17-jdk-alpine

# Establece el directorio de trabajo dentro del contenedor.
WORKDIR /app

# Copia el archivo .jar compilado desde la etapa de construcción.
COPY --from=build /app/target/dockerisez.postgresql-0.0.1-SNAPSHOT.jar java-app.jar

# Exponer el puerto en el que la aplicación se ejecutará.
EXPOSE 8080

# Monitorear la salud del contenedor.
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 CMD curl -f http://localhost:8080/actuator/health || exit 1

# Crear y usar un usuario no root.
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

# El comando para ejecutar tu aplicación.
CMD ["java", "-jar", "java-app.jar"]
