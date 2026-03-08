#!/bin/sh

echo "Pre-build"
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 375334998946.dkr.ecr.us-east-1.amazonaws.com

echo "Build Steps"
docker build -t myteengig .

docker tag myteengig:latest 375334998946.dkr.ecr.us-east-1.amazonaws.com/myteengig:latest

docker push 375334998946.dkr.ecr.us-east-1.amazonaws.com/myteengig:latest

