#!/usr/bin/env sh

# abort on errors
set -e

# build the project
echo "Building the project..."
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

echo "Deploying to static file server..."

# Initialize a new git repository (if needed)
if [ ! -d ".git" ]; then
  git init
fi

# Add changes to git.
git add -A

# Commit changes.
git commit -m 'deploy'

# Push to your remote repository. Replace <USERNAME> and <REPO> with your GitHub username and repository name.
git push -f git@github.com:haseeb-505/react10Projects/travel_suggestion.git master:gh-pages

cd -

echo "Deployment complete!"
