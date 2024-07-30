FROM golang:1.21  as base 

WORKDIR /go/src/app

COPY . .

