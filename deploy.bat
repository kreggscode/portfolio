@echo off
echo ========================================
echo   KREGGSCODE PORTFOLIO DEPLOYMENT
echo ========================================
echo.

echo [1/3] Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)
echo Dependencies installed successfully!
echo.

echo [2/3] Building production bundle...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)
echo Build completed successfully!
echo.

echo [3/3] Deployment Ready!
echo ========================================
echo.
echo Your portfolio has been built successfully!
echo.
echo NEXT STEPS FOR HOSTINGER DEPLOYMENT:
echo.
echo 1. Open FileZilla or Hostinger File Manager
echo 2. Connect to: ftp.kreggscode.com
echo 3. Navigate to: public_html folder
echo 4. Upload ALL files from the 'dist' folder
echo 5. Visit: https://kreggscode.com
echo.
echo ========================================
echo.
echo Build location: %cd%\dist
echo.
echo Files ready to upload:
dir dist /b
echo.
echo ========================================
echo.
echo Press any key to open the dist folder...
pause > nul
explorer dist
