@echo off
echo Building site...
pelican content -s publishconf.py

echo Deploying to GitHub Pages...
ghp-import output -b gh-pages

echo Pushing to GitHub...
git push origin gh-pages

echo Deployment complete!
pause 