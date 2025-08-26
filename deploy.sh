#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

echo "🚀 Starting deployment..."

cd /opt/project_3A || { echo "❌ Failed to cd into /opt/project_3D"; exit 1; }

echo "📥 Pulling latest code from Git..."
git pull origin main

echo "🛠️ Building docker images..."
docker compose build

echo "📦 Running database migrations..."
docker compose run --rm backend python manage.py makemigrations
docker compose run --rm backend python manage.py migrate

echo "🔄 Restarting containers..."
docker compose up -d

echo "✅ Deployment finished successfully!"
