FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} ordersv.jar
ENTRYPOINT ["java","-jar","/ordersv.jar"]