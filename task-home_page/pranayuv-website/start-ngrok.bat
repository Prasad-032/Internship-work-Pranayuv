@echo off
echo Starting PRANAYUV Website with ngrok...
echo.

:: Check Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed. Get it from https://nodejs.org
    pause
    exit /b
)

:: Check ngrok
where ngrok >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: ngrok not found. Download from https://ngrok.com/download
    echo Make sure ngrok.exe is added to PATH or placed in this folder.
    pause
    exit /b
)

:: Start local server in a new window
start "PRANAYUV Local Server" cmd /k "npx serve . --listen 3000"

:: Wait for server to be ready
timeout /t 3 /nobreak >nul

:: Start ngrok in a new window
start "PRANAYUV ngrok Tunnel" cmd /k "ngrok http 3000"

:: Wait for ngrok to generate URL
timeout /t 3 /nobreak >nul

:: Open local browser
start "" http://localhost:3000

echo.
echo Both server and ngrok are running.
echo Check the ngrok window for your public URL.
echo.
pause
