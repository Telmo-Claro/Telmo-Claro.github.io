#!/bin/bash

# Exit on error
set -e

# Build the site
echo "Building site..."
pelican content -s publishconf.py

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
ghp-import output -b gh-pages

# Push to GitHub
echo "Pushing to GitHub..."
git push origin gh-pages

echo "Deployment complete!" 