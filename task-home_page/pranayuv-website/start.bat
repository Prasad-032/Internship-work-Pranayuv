@echo off
echo Starting PRANAYUV Website...
echo.

:: Check if Node.js is installed
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed. Please install it from https://nodejs.org
    pause
    exit /b
)

:: Start the server and open browser
start "" http://localhost:3000
npx serve . --listen 3000

pause
