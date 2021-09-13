FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} booksv.jar
ENTRYPOINT ["java","-jar","/booksv.jar"]