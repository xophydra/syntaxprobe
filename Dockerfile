#syntax=docker/dockerfile:1.7
FROM node:22-alpine
WORKDIR /app
COPY server.js ./
EXPOSE 3000
CMD ["node","server.js"]
