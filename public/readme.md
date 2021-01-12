# Waterfront public

This project is a React App

### Structure

All files will be undercase snake case `example-file-name.js`

This project hopes to use lazy loading to accomplish this the folders will be structured based off of routes. Example
shop will be its own folder and any components and services specific to the shop should be in that folder seeded into
 a `shared` folder.

All universally shared components and services should exist at 'root' shared directory. 

All SCSS will be named with an underscore to prevent getting many different files on build

Example
```
app.js
app.scss
shared
  - footer.js
  - _footer.scss
  - header.js
  - _header.scss
  - http-service.js
shop
  - shop.js
  - _shop.scss
  - shared
      - product.js
      - _product.scss


```
