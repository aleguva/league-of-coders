@echo off
echo Iniciando backend...
start "Backend" cmd /k "cd backend && mvnw.cmd spring-boot:run"

echo Iniciando frontend...
start "Frontend" cmd /k "cd frontend && npm start"

echo Backend y frontend iniciados en ventanas separadas.
echo Cierra las ventanas de Backend y Frontend para detenerlos.
