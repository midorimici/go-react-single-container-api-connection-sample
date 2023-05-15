#!/bin/sh
cd client && yarn start ./client &
cd /app/api && air &
wait
