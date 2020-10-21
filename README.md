# middy-test

Small test project to test an aws lambda implementation with serverless utilising docker in offline mode and using MySQL database connection to get the data

# Installation

## Docker 

Use the included `docker-compose.yml` and run the following:

```
docker-compose pull && docker-compose up -d
```

## Natively

Make sure node.js is installed and run the following:

```
npm i
npm start
```

# Updating

As expected there may be updates, each process is different

## Docker

```
docker-compose pull && docker-compose up -d
```

## Natively

```
git pull && npm i && npm start
```

## Removing

Sometimes you need a clean installation... 

## Docker

```
docker-compose down
rm -rf
```

## Natively

```
// Kill any processes that may be running
rm -rf
```
