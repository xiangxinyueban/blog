FROM node:latest as base

EXPOSE 8080

WORKDIR /app
COPY package*.json ./
RUN npm install

ENTRYPOINT ["npm", "run", "serve"] 
# ENTRYPOINT [ "tail", "-f", "/dev/null" ]