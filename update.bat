@echo off
title GitHub Dual Push Tool

:: ===========================
:: SETTINGS
:: ===========================
set OLD_USER=dhruvilpatel2008
set NEW_USER=25ee034-cyber

echo.
echo ===================================
echo      GitHub Dual Push Tool
echo ===================================
echo.

:: Get folder name as repo name
for %%I in (.) do set REPO_NAME=%%~nI

echo Repository: %REPO_NAME%
echo.

:: Initialize git if needed
if not exist ".git" (
    echo Initializing Git...
    git init
    git branch -M main
)

:: Add remotes if missing
git remote | findstr /i "old" >nul
if errorlevel 1 (
    echo Adding OLD remote...
    git remote add old git@github-old:%OLD_USER%/%REPO_NAME%.git
)

git remote | findstr /i "new" >nul
if errorlevel 1 (
    echo Adding NEW remote...
    git remote add new git@github-new:%NEW_USER%/%REPO_NAME%.git
)

echo.
set /p MSG=Commit Message (Enter for "Update"): 

if "%MSG%"=="" set MSG=Update

git add .

git commit -m "%MSG%"

echo.
echo ===================================
echo Pushing to OLD Account...
echo ===================================
git push old main

echo.
echo ===================================
echo Pushing to NEW Account...
echo ===================================
git push new main

echo.
echo ===================================
echo DONE!
echo ===================================
pause