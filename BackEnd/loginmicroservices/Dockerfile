FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} usersv.jar
ENTRYPOINT ["java","-jar","/usersv.jar"]