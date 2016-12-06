# SampleNodeApp
express app serving server side code for Notes App

Prerequisites:
1. MongoDB
2. Node.js (current versions)
3. Robomongo(optional) GUI for mongo


Before starting the application , please set up your mongo database.(Assuming you started mongo server).Open a mongo shell.
mongo...

> use db_name 
> db_name.createCollection('coll_name')
> db.coll_name.insert({'content':'Angular2 is amazing'})

Done. You can add more records in the similar fashion.


To install all packages, point your cmd to parent directory and trigger the npm install command.
SampleNodeApp> npm install


To start this application, point your cmd to the parent directory and trigger the npm start command.
SampleNodeApp> npm start

This will start your server running at localhost:3000
