#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Configuration
REPO_URL="https://github.com/sisqodataclub/project_3A.git"
PROJECT_DIR="/opt/project_3A"
DOMAIN="dcustom.co.uk"

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

echo "🔑 Checking SSL certificates..."
if [ -d "/etc/letsencrypt/live/$DOMAIN" ]; then
    echo "✅ SSL certificates found at /etc/letsencrypt/live/$DOMAIN"
else
    echo "❌ No SSL certificates found!"
    echo "Run this on host before deploying:"
    echo "  sudo certbot certonly --nginx -d $DOMAIN -d www.$DOMAIN"
    exit 1
fi

echo "🔄 Restarting containers..."
docker compose up -d

echo "🔁 Reloading Nginx to pick up latest certs..."
docker compose exec nginx nginx -s reload || true

echo "✅ Deployment finished successfully!"
