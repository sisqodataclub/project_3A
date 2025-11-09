#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Configuration
REPO_URL="https://github.com/sisqodataclub/project_3A.git"
PROJECT_DIR="/opt/project_3A"
DOMAIN="dcustom.co.uk"

echo "🚀 Starting deployment..."

# Clone or update repo
if [ ! -d "$PROJECT_DIR" ]; then
    echo "📂 Cloning repo..."
    git clone "$REPO_URL" "$PROJECT_DIR"
else
    echo "📂 Updating repo..."
    cd "$PROJECT_DIR"
    git fetch --all
    DEFAULT_BRANCH=$(git symbolic-ref --short refs/remotes/origin/HEAD | cut -d'/' -f2)
    git reset --hard origin/$DEFAULT_BRANCH
    git clean -fd
fi

cd "$PROJECT_DIR"

echo "🛠️ Building docker images..."
docker compose build --no-cache

echo "📦 Running Django migrations..."
docker compose run --rm backend python manage.py makemigrations
docker compose run --rm backend python manage.py migrate

echo "🔄 Restarting containers..."
docker compose up -d --remove-orphans

echo "✅ Deployment finished successfully!"