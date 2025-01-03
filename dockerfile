# Use the official OpenJDK image from Docker Hub
FROM openjdk:11-jre-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the Java source file into the container
COPY double.java .

# Compile the Java program
RUN javac double.java

# Run the Java program
CMD ["java", "Double"]
