Muchas veces necesitamos generar rápidamente una Api para probar el correcto funcionamiento de nuesto frontend

Para ello podemos utilizar la librería json-schema-faker, aquí les dejo un ejemplo de su utilización

### Instalación
```bash
npm i json-server

npm i json-schema-faker
```

### Estructura del mock
```bash
├───api/
│   └───db.json
├───images/
│   └───batman.png
├───mocks/
│   └───schema.js
├───index.js
└───package.json
```

### Modificar package.json
```json
"scripts": {
    "start-api": "json-server --watch ./api/db.json --port 3000",
    "generate-data": "node ./index"
},
```

### Generar schema.js
```javascript
const schema = {
    reports: {
        type: 'array',
        minItems: 5,
        maxItems: 10,
        items: {
            id: {
                type: 'integer',
                unique: true,
                minimum: 1,
                maximum: 1000,
            },
            title: {
                enum: ['titulo 1', 'titulo 2', 'titulo 3'],
            },
            logo: '../images/batman.png'
        },
    },
}

module.exports = schema;
```

### Modificar index.js
```javascript
var jsf = require('json-schema-faker');
var schema = require('./mocks/schema');
var fs = require('fs');

var json = JSON.stringify(jsf(schema));

fs.writeFile("./api/db.json", json, function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Mock generado");
  }
});
```

### Generar datos fake
```bash
npm run generate-data
```

### Ejecutar server
```bash
npm run start-api
```