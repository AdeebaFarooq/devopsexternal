# Use the official OpenJDK image from Docker Hub
FROM openjdk:11-jre-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the Java source file into the container
COPY ..

# Compile the Java program
RUN javac double.java

# Expose any necessary port (if needed, in this case Java doesn't usually expose a port)
EXPOSE 8080

# Command to run the Java application
CMD ["java", "double"]

