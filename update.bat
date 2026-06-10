@echo off
title College Website Sync

echo ===================================
echo      College Website Sync
echo ===================================
echo.

git add .

git diff --cached --quiet
if not errorlevel 1 (
    set /p MSG=Commit Message (Press Enter for "Website Update"): 
    if "%MSG%"=="" set MSG=Website Update
    git commit -m "%MSG%"
)

echo.
echo Uploading to OLD account...
git push old main --force

echo.
echo Uploading to NEW account...
git push new main --force

echo.
echo ===================================
echo      Sync Complete!
echo ===================================
echo.
pause