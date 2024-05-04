FROM postgres:16-bullseye
RUN userdel postgres 
RUN groupadd -g 1000 postgres 
RUN useradd -m -u 1000 -g 1000 postgres 

COPY 001_dictionary_tables.sql /docker-entrypoint-initdb.d/001_dictionary_tables.sql

RUN mkdir /postgresql_data
RUN chown -R 1000:1000 /postgresql_data
ENV PGDATA=/postgresql_data