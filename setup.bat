@echo off
color 0A
echo.
echo ========================================
echo   KREGGSCODE PORTFOLIO SETUP
echo ========================================
echo.
echo This script will set up your portfolio
echo and prepare it for deployment.
echo.
pause

echo.
echo [1/4] Checking Node.js installation...
node --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org
    pause
    exit /b 1
)
node --version
echo Node.js is installed!
echo.

echo [2/4] Installing dependencies...
echo This may take a few minutes...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)
echo Dependencies installed successfully!
echo.

echo [3/4] Testing development server...
echo Starting dev server for 5 seconds...
start /B npm run dev
timeout /t 5 /nobreak >nul
taskkill /F /IM node.exe >nul 2>&1
echo Dev server test complete!
echo.

echo [4/4] Creating production build...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)
echo Production build created!
echo.

echo ========================================
echo   SETUP COMPLETE!
echo ========================================
echo.
echo Your portfolio is ready!
echo.
echo WHAT'S NEXT?
echo.
echo 1. CUSTOMIZE YOUR CONTENT:
echo    - Edit src/components/Hero.jsx (your name)
echo    - Edit src/components/About.jsx (about you)
echo    - Edit src/components/Projects.jsx (your projects)
echo    - Edit src/components/Contact.jsx (your contacts)
echo.
echo 2. TEST LOCALLY:
echo    Run: npm run dev
echo    Visit: http://localhost:5173
echo.
echo 3. DEPLOY TO HOSTINGER:
echo    Run: deploy.bat
echo    Then upload 'dist' folder to Hostinger
echo.
echo 4. HELPFUL GUIDES:
echo    - QUICK_START.md - Quick setup guide
echo    - DEPLOYMENT_GUIDE.md - Detailed deployment
echo    - README.md - Full documentation
echo.
echo ========================================
echo.
echo Press any key to start development server...
pause >nul
npm run dev
