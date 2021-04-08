FROM openjdk:15

MAINTAINER Jimmy Dang <jimmydang12@hotmail.de>

ADD backend/target/columbus.jar columbus.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dsecurity.jwt.secret=$JWT_SECRET -Dgithub.auth.client-id=$GITHUB_CLIENT_ID -Dgithub.auth.client-secret=$GITHUB_CLIENT_SECRET -jar /app.jar"]