follow practice

run command:

docker run -d -p 6380:6379 --name redis-cache redis
docker run -d -p 6380:6379 --name redis-cache redis --loglevel warning #354p

Use Redis specific version "3.1.2" to avoid error
