#!/bin/bash

echo "Iniciando backend..."
cd backend && mvn spring-boot:run &
BACKEND_PID=$!

echo "Iniciando frontend..."
cd frontend && npm start &
FRONTEND_PID=$!

echo "Backend PID: $BACKEND_PID | Frontend PID: $FRONTEND_PID"
echo "Pulsa Ctrl+C para detener ambos."

trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit" SIGINT SIGTERM
wait
