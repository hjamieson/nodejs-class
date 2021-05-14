# NODEJS Notes
## NPM functions
```
% npm init
% npm start
% npm run start-server
% npm install nodemon --save-dev
% npm install --save express
```

## Body Parser middleware
```javascript
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
```
