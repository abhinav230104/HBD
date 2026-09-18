#!/bin/bash

set -e

echo "===== Deployment started ====="

cd ~/HBD

echo "===== Pulling latest code ====="
git pull origin main

echo "===== Installing dependencies ====="
npm install

echo "===== Building application ====="
npm run build

echo "===== Restarting application ====="
pm2 restart hbd

echo "===== Saving PM2 process ====="
pm2 save

echo "===== Deployment completed ====="