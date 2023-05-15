FROM golang:1.20.4-alpine

WORKDIR /app

COPY ./client ./client

RUN apk add -U --no-cache \
  nodejs \
  npm && \
  npm i -g yarn

COPY ./api ./api
COPY ./start.sh ./start.sh

RUN go install github.com/cosmtrek/air@latest && \
  go build -C api

EXPOSE 3000 ${API_PORT}

CMD [ "sh", "start.sh" ]
