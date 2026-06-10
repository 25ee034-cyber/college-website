@echo off
title College Website Sync

git add .

git diff --cached --quiet
if not errorlevel 1 (
    git commit -m "Website Update"
)

echo.
echo Uploading to OLD account...
git push old main --force

echo.
echo Uploading to NEW account...
git push new main --force

echo.
echo Sync Complete!
pause