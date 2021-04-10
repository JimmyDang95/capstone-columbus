FROM openjdk:15

MAINTAINER Jimmy Dang <jimmydang12@hotmail.de>

ADD backend/target/columbus-explore.jar columbus-explore.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dsecurity.jwt.secret=$JWT_SECRET -jar /app.jar"]