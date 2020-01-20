FROM node:13.6.0-alpine

RUN apk add --no-cache libc6-compat=1.1.24-r0 python=2.7.16-r3

WORKDIR /app

COPY . .

CMD ["npm", "start"]

EXPOSE 3000
