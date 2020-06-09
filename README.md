# MERN/MERD Stack boilerplate with 🐳
Mongo Express React Node  
Mongo Express React Deno

## TODO

[x] Add Linter  
[x] Add Prettier  
[x] Implement authentication
[ ] Makefile  
[ ] BDD  
[ ] ELK stack on a dedicated docker-compose ?  
[ ] Choose UI library or from scratch?


# Run the project
## Prerequisites
Make sure having installed :
* Docker (with docker-compose)
* Node (or nvm)
* NPM or YARN

## Run the stack
If you want to launch the whole stack at once
```
docker-compose up
```

If you want to launch by service
```
docker-compose up MY_SVC
```

With **MY_SVC** = `server|client|database|test`
