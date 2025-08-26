#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Configuration
REPO_URL="https://github.com/sisqodataclub/project_3A.git"
PROJECT_DIR="/opt/project_3A"

echo "🚀 Starting deployment..."

# Check if project folder exists
if [ ! -d "$PROJECT_DIR" ]; then
    echo "📂 Project folder not found. Cloning repo..."
    git clone "$REPO_URL" "$PROJECT_DIR"
else
    echo "📂 Project folder exists. Pulling latest changes..."
    cd "$PROJECT_DIR"
    git pull origin main
fi

# Enter project directory
cd "$PROJECT_DIR"

echo "🛠️ Building docker images..."
docker compose build

echo "📦 Running database migrations..."
docker compose run --rm backend python manage.py makemigrations
docker compose run --rm backend python manage.py migrate

echo "🔄 Restarting containers..."
docker compose up -d

echo "✅ Deployment finished successfully!"
