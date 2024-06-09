FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=mydatabase

COPY ./database_dump.sql /docker-entrypoint-initdb.d/