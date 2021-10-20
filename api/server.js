const app = require('./app');
const {mongoConnect} = require('./config/db');

const PORT = 8080;

mongoConnect();

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
});