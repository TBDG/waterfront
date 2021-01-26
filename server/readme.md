# Waterfront server

This project is an Express and Postgres using Massivejs

### Express Structure

We will be structured as a REST API ability to acces and modify content should use the regular post, put, get, delete 
http methods.

Each resource should have its own  controller that uses express Router. 

All controllers are folded together in the controllers/index.js file.

Example:
```
server.js
controllers
  - index.js
  - email.js
  - product.js
```

This should result in the equivalent api structure
```
/api/email
/api/product
```

### MassiveJS Structure

All sql files are to kept in db folder which allows MassiveJS kept in folders that are particular to a specific resource 
which will allow for use of masssive looking like this `db.email.insertOne()` [massive docs](https://massivejs.org/docs/functions-and-scripts)

only exception to this rule is the database seeding or migration.

Example
```
db
  - email
      - insertOne.sql
  - product
      - getAllByCategory.sql (this doesn't exist yet or might not)
```
